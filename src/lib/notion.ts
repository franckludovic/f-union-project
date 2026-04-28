import { Client } from '@notionhq/client';
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

const NOTION_TOKEN = process.env.NOTION_TOKEN;

export const notion = new Client({
  auth: NOTION_TOKEN,
});

export const NOTION_PAGE_ID = process.env.NOTION_PAGE_ID;

export interface CommuniqueContent {
  header: string;
  paragraphs: string[];
  hasPdf: boolean;
}

export async function getCommuniqueContent(): Promise<CommuniqueContent> {
  if (!NOTION_PAGE_ID) {
    console.error("Missing NOTION_PAGE_ID");
    return { header: 'Communiqué de Presse F-UNION AFRICA 2026', paragraphs: ['Content missing. Setup Notion integration.'], hasPdf: false };
  }

  try {
    const response = await notion.blocks.children.list({
      block_id: NOTION_PAGE_ID,
    });

    const blocks = response.results as BlockObjectResponse[];

    let header = 'Communiqué de Presse';
    const paragraphs: string[] = [];
    let hasPdf = false;

    for (const block of blocks) {
      if (block.type === 'heading_1' || block.type === 'heading_2' || block.type === 'heading_3') {
        const textArr = (block as any)[block.type].rich_text;
        if (textArr && textArr.length > 0 && header === 'Communiqué de Presse') {
          header = textArr.map((t: any) => t.plain_text).join('');
        }
      } else if (block.type === 'paragraph') {
        const textArr = block.paragraph.rich_text;
        if (textArr && textArr.length > 0) {
          paragraphs.push(textArr.map((t: any) => t.plain_text).join(''));
        }
      } else if (block.type === 'file') {
        const url = block.file.type === 'file' ? block.file.file.url : block.file.external.url;
        if (url) hasPdf = true;
      } else if (block.type === 'pdf') {
        const url = block.pdf.type === 'file' ? block.pdf.file.url : block.pdf.external.url;
        if (url) hasPdf = true;
      }
    }

    // Default text if empty
    if (paragraphs.length === 0) {
      paragraphs.push("La visibilité comme levier de transformation économique.");
    }

    return {
      header,
      paragraphs,
      hasPdf
    };
  } catch (error) {
    console.error("Error fetching from Notion:", error);
    return { header: 'Communiqué de Presse F-UNION AFRICA 2026', paragraphs: ['Failed to load content from Notion.'], hasPdf: false };
  }
}

// Separate function to get the PDF URL and filename when requested
export async function getNotionPdfUrl(): Promise<{ url: string; name: string } | null> {
  if (!NOTION_PAGE_ID) return null;

  try {
    const response = await notion.blocks.children.list({
      block_id: NOTION_PAGE_ID,
    });

    const blocks = response.results as BlockObjectResponse[];

    for (const block of blocks) {
      if (block.type === 'file') {
        const url = block.file.type === 'file' ? block.file.file.url : block.file.external.url;
        const name = block.file.name || 'document.pdf';
        if (url) return { url, name };
      } else if (block.type === 'pdf') {
        const url = block.pdf.type === 'file' ? block.pdf.file.url : block.pdf.external.url;
        const name = 'communique.pdf';
        if (url) return { url, name };
      }
    }
    return null;
  } catch (error) {
    console.error("Error fetching PDF from Notion:", error);
    return null;
  }
}

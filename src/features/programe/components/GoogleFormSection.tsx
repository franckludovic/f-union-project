import { Container } from "@/core/components/Container";

interface GoogleFormSectionProps {
  formUrl: string;
}

export const GoogleFormSection = ({ formUrl }: GoogleFormSectionProps) => {
  if (!formUrl) return null;

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-summit-dark mb-4">
              Sélectionnez vos sessions
            </h2>
            <p className="text-lg text-gray-600">
              Veuillez remplir le formulaire ci-dessous pour nous indiquer les sessions auxquelles vous souhaitez participer.
            </p>
            <div className="w-20 h-1.5 bg-summit-red mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <iframe
              src={formUrl}
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full"
            >
              Chargement…
            </iframe>
          </div>
        </div>
      </Container>
    </section>
  );
};

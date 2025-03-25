export default function IntroSection() {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Nuestra Historia</h2>
            <p className="text-lg text-gray-600 mb-8">
              Somos una empresa dedicada a ofrecer productos de la más alta calidad. Nuestra pasión es brindar
              experiencias excepcionales a través de productos de belleza innovadores y dulces artesanales elaborados con
              ingredientes seleccionados.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Productos de Belleza</h3>
                <p className="text-gray-600">
                  Formulados con ingredientes naturales y tecnología avanzada para realzar tu belleza natural.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Dulces Artesanales</h3>
                <p className="text-gray-600">
                  Elaborados con recetas tradicionales y un toque de innovación para deleitar tu paladar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  
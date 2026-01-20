export default function SanctuaryUpdates() {
  return (
    <section className="bg-[#f5f3e7] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#9cab3a]">
          Life at the Sanctuary
        </h2>
        <p className="text-gray-600 mb-10 max-w-3xl mx-auto">
          Daily care, medical recoveries, and small victories that your support makes possible.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow p-6 text-left"
            >
              <h4 className="font-semibold mb-2 text-[#9cab3a]">Rescue Update #{i}</h4>
              <p className="text-gray-600 text-sm">
                A rescued animal recovering with medical care, nutrition, and love.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

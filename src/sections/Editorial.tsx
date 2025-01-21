import Image from "next/image";

import { Card } from "@/components/ui/card";

interface StatProps {
  value: string;
  label: string;
  showDot?: boolean;
}

function Stat({ value, label, showDot = false }: StatProps) {
  return (
    <div className="">
      <div className="mb-2 text-4xl font-bold text-gray-200 md:text-5xl">
        {value}
      </div>
      <div className="text-sm uppercase tracking-wider text-gray-400">
        {label}
      </div>
      {showDot && (
        <div className="absolute -right-4 top-1/2 hidden h-2 w-2 -translate-y-1/2 transform rounded-full bg-pink-500 lg:block" />
      )}
    </div>
  );
}

export default function EditorialSection() {
  return (
    <section className="mt-16 flex gap-16 lg:flex-row lg:items-center">
      <Image
        src={"/img/benefit-one.png"}
        width="521"
        height="482"
        alt="Benefits"
        className="lg:w-1/3"
      />
      <Card className="border-0 px-6 py-12 text-gray-300 md:py-16 lg:w-2/3">
        <div className="mx-auto max-w-6xl">
          {/* Editorial Header */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-1 bg-pink-500" />
              <h2 className="text-lg font-medium text-pink-500">Editorial</h2>
            </div>

            <h1 className="text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl">
              {"Se fédérer pour exister, résister, s'améliorer et innover"}
            </h1>

            <p className="max-w-3xl text-lg text-gray-500 md:text-xl">
              {
                "Le Réseau Public Départemental d'Aide à Domicile de la Gironde accompagne près de 5000 personnes âgées et personnes en situation de handicap qui choisissent de vivre à domicile."
              }
            </p>
          </div>

          {/* Stats Grid */}
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Stat value="32" label="CCAS et CIAS membres" showDot={true} />
            <Stat
              value="+1200"
              label="Professionnels de terrain"
              showDot={true}
            />
            <Stat value="700 000" label="Heures réalisées" showDot={true} />
            <Stat value="192" label="Communes d'intervention" />
          </div>
        </div>
      </Card>
    </section>
  );
}

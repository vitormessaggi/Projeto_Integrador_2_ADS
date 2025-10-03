"use client"
import { useState } from 'react';
import Image from 'next/image';

export default function SearchBanner() {

  const [action, setAction] = useState('comprar');

  const handleActionClick = (type) => {
    setAction(type);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Buscando imóveis para ${action.toUpperCase()}`);
  };

  return (
    <section className="w-full h-[500px] bg-[#8d001a] flex justify-center items-center relative">
      <div className="w-[90%] h-full relative flex items-center">
        {/* Imagem de fundo */}
        <div className="absolute left-0 top-[-20px] h-[115%] w-full md:w-auto z-10">
          <Image
            src="/images/image-banner.svg"
            alt="Mulher com celular"
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
          />
        </div>

        {/* Box de pesquisa */}
        <div className="relative z-20 ml-auto bg-[#f2f2f2] rounded-xl p-8 md:p-10 w-full md:w-2/3 shadow-lg">
          <h2 className="font-poppins font-bold text-2xl md:text-3xl mb-6 text-black">
            O imóvel que você procura está aqui!
          </h2>

          {/* Tabs Comprar / Alugar */}
          <div className="flex gap-6 mb-2">
            <button
              type="button"
              className={`px-4 py-2 font-semibold text-base rounded-lg transition ${
                action === 'comprar'
                  ? 'bg-[#8d001a] text-white'
                  : 'text-[#8d001a] hover:text-black'
              }`}
              onClick={() => handleActionClick('comprar')}
            >
              COMPRAR
            </button>
            <button
              type="button"
              className={`px-4 py-2 font-semibold text-base rounded-lg transition ${
                action === 'alugar'
                  ? 'bg-[#8d001a] text-white'
                  : 'text-[#8d001a] hover:text-black'
              }`}
              onClick={() => handleActionClick('alugar')}
            >
              ALUGAR
            </button>
          </div>

          <hr className="border-t border-[#8d001a] mb-6" />

          {/* Formulário de pesquisa */}
          <form
            id="searchForm"
            className="flex flex-wrap gap-4 items-end"
            onSubmit={handleSubmit}
          >
            {/* Tipo de imóvel */}
            <div className="flex flex-col flex-1 min-w-[150px]">
              <label htmlFor="tipo-imovel" className="text-sm mb-1">
                Tipo de Imóvel
              </label>
              <select
                id="tipo-imovel"
                name="tipo-imovel"
                className="p-2 rounded-lg border border-gray-300 text-[#8d001a] font-normal"
                required
              >
                <option value="">Selecione</option>
                <option value="casa">Casa</option>
                <option value="apartamento">Apartamento</option>
                <option value="terreno">Terreno</option>
              </select>
            </div>

            {/* Localização */}
            <div className="flex flex-col flex-1 min-w-[150px]">
              <label htmlFor="localizacao" className="text-sm mb-1">
                Onde Deseja Morar?
              </label>
              <select
                id="localizacao"
                name="localizacao"
                className="p-2 rounded-lg border border-gray-300 text-[#8d001a] font-normal"
                required
              >
                <option value="">Selecione</option>
                <option value="sp">São Paulo</option>
                <option value="rj">Rio de Janeiro</option>
                <option value="bh">Belo Horizonte</option>
              </select>
            </div>

            {/* Botão Buscar */}
            <button
              type="submit"
              className="bg-[#8d001a] text-white font-bold px-6 py-3 rounded-lg transition hover:bg-[#6c0015]"
            >
              BUSCAR
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

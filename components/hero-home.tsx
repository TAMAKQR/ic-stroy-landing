"use client";

import Image from "next/image";
import { useState } from "react";
import PageIllustration from "@/components/page-illustration";

import { SITE_DOMAIN } from "@/lib/site";

export default function HeroHome() {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    from: '',
    to: '',
    cargoType: '',
    weight: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [terminalFormData, setTerminalFormData] = useState({
    name: '',
    phone: '',
    from: '',
    to: '',
    cargoType: '',
    weight: ''
  });

  const handleTerminalInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerminalFormData({
      ...terminalFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Заявка на перевозку:\nИмя: ${terminalFormData.name}\nТелефон: ${terminalFormData.phone}\nОткуда: ${terminalFormData.from}\nКуда: ${terminalFormData.to}\nТип груза: ${terminalFormData.cargoType}\nВес/Объем: ${terminalFormData.weight}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/77770087777?text=${encodedMessage}`, '_blank');
    setTerminalFormData({
      name: '',
      phone: '',
      from: '',
      to: '',
      cargoType: '',
      weight: ''
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Заявка на перевозку:\nИмя: ${formData.name}\nТелефон: ${formData.phone}\nОткуда: ${formData.from}\nКуда: ${formData.to}\nТип груза: ${formData.cargoType}\nВес/Объем: ${formData.weight}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/77770087777?text=${encodedMessage}`, '_blank');
    setModalOpen(false);
    setFormData({
      name: '',
      phone: '',
      from: '',
      to: '',
      cargoType: '',
      weight: ''
    });
  };

  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <div
              className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]"
              data-aos="zoom-y-out"
            >
              <div className="-mx-0.5 flex justify-center -space-x-3">
                <Image
                  className="box-content rounded-full border-2 border-gray-50 object-cover"
                  src="/images/flag-kz.png"
                  width={40}
                  height={40}
                  alt="Flag of Kazakhstan"
                  priority
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50 object-cover"
                  src="/images/flag-kg.png"
                  width={40}
                  height={40}
                  alt="Flag of Kyrgyzstan"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50 object-cover"
                  src="/images/flag-tj.png"
                  width={40}
                  height={40}
                  alt="Flag of Tajikistan"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50 object-cover"
                  src="/images/flag-uz.png"
                  width={40}
                  height={40}
                  alt="Flag of Uzbekistan"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50 object-cover"
                  src="/images/flag-ru.png"
                  width={40}
                  height={40}
                  alt="Flag of Russia"
                />
              </div>
            </div>
            <h1
              className="mb-6 border-y text-4xl font-bold text-center [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-5xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Грузоперевозки<br />по Казахстану и СНГ
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700 text-center"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                IC Stroy предлагает надежные грузоперевозки по Казахстану и странам СНГ<br />с гарантией безопасности и своевременной доставки.
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <button
                    onClick={() => setModalOpen(true)}
                    className="btn group mb-4 w-full bg-linear-to-r from-blue-600 to-violet-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                  >
                    <span className="relative inline-flex items-center">
                      Заказать перевозку{" "}
                        <span className="ml-1 tracking-normal text-violet-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </button>
                  <a
                    className="btn w-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    <span>Узнать больше</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,--theme(--color-slate-300/.8),transparent)1]">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,var(--color-gray-600)_4.5px,transparent_0)] after:w-[41px]">
                <span className="text-[13px] font-medium text-white">
                  {SITE_DOMAIN}
                </span>
              </div>
              <div className="font-mono text-gray-500">
                <div className="text-gray-200 mb-4">$ cargo-request-form</div>
                <form onSubmit={handleTerminalSubmit} className="space-y-2">
                  <div>
                    <label className="block text-gray-400 text-sm">Имя:</label>
                    <input
                      type="text"
                      name="name"
                      value={terminalFormData.name}
                      onChange={handleTerminalInputChange}
                      className="w-full bg-gray-800 text-white border border-gray-600 rounded px-2 py-1"
                      placeholder="Ваше имя"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm">Телефон:</label>
                    <input
                      type="tel"
                      name="phone"
                      value={terminalFormData.phone}
                      onChange={handleTerminalInputChange}
                      className="w-full bg-gray-800 text-white border border-gray-600 rounded px-2 py-1"
                      placeholder="+7 (___) ___-__-__"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm">Откуда:</label>
                    <input
                      type="text"
                      name="from"
                      value={terminalFormData.from}
                      onChange={handleTerminalInputChange}
                      className="w-full bg-gray-800 text-white border border-gray-600 rounded px-2 py-1"
                      placeholder="Город отправления"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm">Куда:</label>
                    <input
                      type="text"
                      name="to"
                      value={terminalFormData.to}
                      onChange={handleTerminalInputChange}
                      className="w-full bg-gray-800 text-white border border-gray-600 rounded px-2 py-1"
                      placeholder="Город назначения"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm">Тип груза:</label>
                    <input
                      type="text"
                      name="cargoType"
                      value={terminalFormData.cargoType}
                      onChange={handleTerminalInputChange}
                      className="w-full bg-gray-800 text-white border border-gray-600 rounded px-2 py-1"
                      placeholder="Описание груза"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm">Вес/Объем:</label>
                    <input
                      type="text"
                      name="weight"
                      value={terminalFormData.weight}
                      onChange={handleTerminalInputChange}
                      className="w-full bg-gray-800 text-white border border-gray-600 rounded px-2 py-1"
                      placeholder="кг / м³"
                      required
                    />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Отправить заявку</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h2 className="text-xl font-bold mb-4">Заявка на перевозку</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium">Имя:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                  placeholder="Ваше имя"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium">Телефон:</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                  placeholder="+7 (___) ___-__-__"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium">Откуда:</label>
                <input
                  type="text"
                  name="from"
                  value={formData.from}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                  placeholder="Город отправления"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium">Куда:</label>
                <input
                  type="text"
                  name="to"
                  value={formData.to}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                  placeholder="Город назначения"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium">Тип груза:</label>
                <input
                  type="text"
                  name="cargoType"
                  value={formData.cargoType}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                  placeholder="Описание груза"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium">Вес/Объем:</label>
                <input
                  type="text"
                  name="weight"
                  value={formData.weight}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                  placeholder="кг / м³"
                  required
                />
              </div>
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                  Отправить заявку
                </button>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 rounded hover:bg-gray-400"
                >
                  Отмена
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

"use client";
import React, { useState } from "react";

const ConsultationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    question: "",
    email: "",
    documents: "",
    phone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded">
      <h2 className="mb-4 text-xl font-bold">Получить консультацию</h2>
      <p className="mb-4">Оставьте заявку</p>
      <p className="mb-4">Получите ответ в удобное для вас время</p>

      <label className="block mb-2">
        Ваше имя
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </label>

      <label className="block mb-2">
        Задайте любой интересующий вопрос
        <textarea
          name="question"
          value={formData.question}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </label>

      <label className="block mb-2">
        Ваш e-mail
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </label>

      <label className="block mb-2">
        Запросите необходимые документы (цены, брошюра, план оплаты, планировки)
        <input
          type="text"
          name="documents"
          value={formData.documents}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </label>

      <label className="block mb-4">
        Номер телефона
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </label>

      <button
        type="submit"
        className="w-full p-2 text-white bg-blue-500 rounded"
      >
        отправить
      </button>
    </form>
  );
};

export default ConsultationForm;

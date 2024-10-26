import { render } from "@react-email/render";
import EmailReservation from "@/components/emails/EmailReservation";
import { useState } from "react";

interface props {
  productName: string;
  productType: string;
  userName: string;
  userNumber: number;
  userEmail: string;
  checkInDate: string;
  checkOutDate: string;
  checkInTime: string;
  checkOutTime: string;
  adults: number;
  kids: number;
  userComment?: string;
  price: number;
  currency: string;
  productUrl: string;
}

const EmailForm = ({
  productType,
  productName,
  checkInDate,
  checkOutDate,
  adults,
  kids,
  checkInTime,
  checkOutTime,
  price,
  currency,
  productUrl,
}: props) => {
  const [formData, setFormData] = useState({
    userName: "",
    userNumber: "",
    userEmail: "",
    productType: productType,
    productName: productName,
    checkInDate: checkInDate,
    checkOutDate: checkOutDate,
    checkInTime: checkInTime,
    checkOutTime: checkOutTime,
    adults: adults,
    kids: kids,
    price: price,
    currency: currency,
    productUrl: productUrl,
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Render the email component to HTML string
    const emailHtml = await render(<EmailReservation {...formData} />, {
      pretty: true,
    });
    // Text
    const emailText = await render(<EmailReservation {...formData} />, {
      plainText: true,
    });

    // Send the email
    try {
      const res = await fetch("./api/sendEmail.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Better Travel <onboarding@resend.dev>",
          to: "javiervitalioperalta@gmail.com",
          subject: `Reserva `,
          html: emailHtml,
          text: emailText,
        }),
      });
      // const data = await res.json();
      alert("Correo enviado con exito");
      window.location.href = "/";
    } catch (error) {
      alert("Error sending email: " + error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex flex-col max-w-[400px] md:mt-10 w-full items-start  [&>*]:rounded [&>input]:w-full justify-start [&>label]:py-2 [&>label]:pl-3 [&>label]:font-medium [&>label]:text-gray-700 [&>input]:px-2 [&>input]:py-2 [&>*]:outline-none [&>input]:border [&>input]:border-transparent [&>input]:active:border [&>input:active]:border-red-500"
    >
      <label htmlFor="userName">Nombre:</label>
      <input
        onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
        value={formData.userName}
        type="text"
        name="userName"
        id="userName"
      />
      <label htmlFor="userNumber">Numero de telefono:</label>
      <input
        onChange={(e) =>
          setFormData({ ...formData, userNumber: e.target.value })
        }
        value={formData.userNumber}
        type="tel"
        name="userNumber"
        id="userNumber"
      />
      <label htmlFor="userEmail">Correo electronico:</label>
      <input
        onChange={(e) =>
          setFormData({ ...formData, userEmail: e.target.value })
        }
        value={formData.userEmail}
        type="email"
        name="userEmail"
        id="userEmail"
      />
      <textarea
        name=""
        id=""
        className="w-full min-h-56 mt-3 resize-none"
        readOnly
      >
        {`
          ${productType}: ${productName}
          Dia de Check In: ${checkInDate}
          Dia de Check Out: ${checkOutDate}
          Hora de Check In: ${checkInTime}
          Hora de Check Out: ${checkOutTime}
          Adultos: ${adults}
          Niños: ${kids}`}
      </textarea>
      <button
        type="submit"
        className="px-10 py-2 mx-auto mt-5 font-bold bg-green-500"
      >
        Enviar
      </button>
    </form>
  );
};

export default EmailForm;

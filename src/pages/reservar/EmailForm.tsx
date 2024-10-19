import { render } from "@react-email/render";
import EmailReservation from "@/components/emails/EmailReservation";
import { useState } from "react";

/*************  ✨ Codeium Command ⭐  *************/
/**
 * EmailForm is a form component for sending an email
 * @returns {JSX.Element} a form with an input field for the user's name
 * and a submit button to send the email
 */
/******  4fbdfff7-75f5-4ee3-8562-e6ccd25c7c32  *******/ const EmailForm =
  () => {
    const [formData, setFormData] = useState({
      userName: "",
    });
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(formData.userName);

      // Render the email component to HTML string
      const emailHtml = await render(
        <EmailReservation userName={formData.userName} />,
        {
          pretty: true,
        }
      );
      // Text
      const emailText = await render(<EmailReservation />, {
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
      } catch (error) {
        alert("Error sending email: " + error);
      }
    };

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="userName">Nombre</label>
          <input
            onChange={(e) =>
              setFormData({ ...formData, userName: e.target.value })
            }
            value={formData.userName}
            type="text"
            name="userName"
            id="userName"
          />
          <button
            type="submit"
            className="px-10 py-2 mx-auto mt-5 font-bold bg-green-500"
          >
            Enviar
          </button>
        </form>
      </div>
    );
  };

export default EmailForm;

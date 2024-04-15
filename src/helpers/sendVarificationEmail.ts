import { resend } from "@/lib/resend";
import VarificationEmail from "../../emails/VarificationEmail";
import { ApiRespomse } from "@/types/ApiResponse";

export async function sendVarificationEmail(
  email: string,
  username: string,
  varifyCode: string
): Promise<ApiRespomse> {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Anonyms Feedback Varification Code",
      react: VarificationEmail({ username, otp: varifyCode }),
    });
    return { success: true, message: "Varification email sent successfully" };
  } catch (emailError) {
    console.error("Error sending varification email", emailError);
    return { success: false, message: "Failed to send varification email" };
  }
}

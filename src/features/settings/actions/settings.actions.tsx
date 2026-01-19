"use server";

import { cookies } from "next/headers";

export async function updateProfile(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");

  // TODO: database persistence
}

export async function updateNotifications(formData: FormData) {
  const emailNotifications = formData.get("emailNotifications") === "on";
  const taskReminders = formData.get("taskReminders") === "on";

  // TODO: database persistence
}

export async function updateTheme(formData: FormData) {
  const theme = formData.get("theme") as string;

  const cookie = await cookies();
  cookie.set("theme", theme, {
    path: "/",
    httpOnly: false,
    maxAge: 60 * 60 * 24 * 365,
  });
}

export async function deleteAccount() {
  // TODO: database persistence
}

import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY
  if (!secretKey) {
    console.error("RECAPTCHA_SECRET_KEY is not set in environment variables.")
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
  const { gRecaptchaToken } = await request.json()
  if (!gRecaptchaToken) {
    return NextResponse.json(
      { error: "Recaptcha token is missing" },
      { status: 400 }
    )
  }
  const formData = `secret=${secretKey}&response=${gRecaptchaToken}`
  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
      }
    ).then((res) => res.json())

    if (response.success && response.score >= 0.75) {
      return NextResponse.json({ message: "Recaptcha verified" })
    } else {
      return NextResponse.json(
        { error: "Recaptcha verification failed" },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error(`Error during recaptcha verification: ${error}`)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

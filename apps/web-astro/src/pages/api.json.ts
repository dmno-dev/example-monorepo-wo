// export const prerender = true;

export async function GET() {
  
  console.log(import.meta.env.SECRET_FOO);

  return new Response(
    JSON.stringify({
      "PUBLIC_FOO": import.meta.env.PUBLIC_FOO,
      "FOO": import.meta.env.FOO,
    })
  )
}

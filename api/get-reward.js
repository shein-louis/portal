export default function handler(req, res) {
  // Ambil link dari Environment Variable Vercel (Paling Aman)
  // Atau ganti langsung di variabel 'target' di bawah ini:
  const target = process.env.REWARD_LINK || "https://omg10.com/4/10803866";

  // Redirect secara server-side
  res.redirect(302, target);
}
# Final setup — 3 things to finish

Everything is built and runs. To make it fully live, add these:

## 1. Your portrait photo (About section)
Save the photo you provided as:

```
public/radhika.jpg
```

It appears in the About section automatically (with a 3D tilt frame). Until
then, a gold monogram “RG” placeholder shows. Recommended: ~1000×1250 (4:5),
optimized .jpg.

## 2. Contact form — Web3Forms key
The contact form posts to [Web3Forms](https://web3forms.com) (free, no backend).

1. Go to https://web3forms.com → enter **radhikagondaliya2106@gmail.com** → get
   your **Access Key**.
2. Paste it into `lib/data.ts`:

```ts
web3formsKey: "YOUR_WEB3FORMS_ACCESS_KEY", // ← replace this
```

Submissions then arrive in your inbox. The form already includes spam honeypot
protection and success/error states.

## 3. Project cover images
Drop each project’s cover into `public/projects/` (see the table in
`public/projects/README.md`). Gradient placeholders show until you do.

---

### Already done for you
- Name set to **Radhika Gondaliya**, email + LinkedIn + Dribbble wired in.
- All 8 projects added with **Live site / View design** buttons.
- New clean **3D hero** (rotating glass cube, floating spheres, orbiting ring) —
  no overlapping typography.
- Behance removed everywhere (you didn’t have one listed).

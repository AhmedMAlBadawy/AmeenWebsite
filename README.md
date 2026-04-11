# Before Contribution

- You have to install [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and [Code Spell Checker
  ](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) extensions.

- We follow mobile first methodology.

- We use css module to get scoped classes.

- To edit new feature please create new branch from [testing](https://github.com/Meem-Dev/ameen-website2/tree/testing) branch.

- We follow [this](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow#:~:text=Gitflow%20is%20a%20legacy%20Git,software%20development%20and%20DevOps%20practices) workflow in contribution, So please follow it. you will find a useful explanation [here](https://www.youtube.com/watch?v=7OTrHx56GfE&list=PLtxOBbrOOPH4zeJLOdRNrP4pGft2IfMgo&index=5).

- Each component has its assets, data and sub-component.

- /UIs/ folder is for general small components only.

- Don't style pages, create a component and style it then import it in its proper page.

- Don't use the \_app.js file in any styling or logic.

---

# useful Extensions

- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

---

# About Project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

---

# Getting Started

```bash
> npm install
> npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

# Todo

-- clear from next.config.js

images: {
domains: ["img.freepik.com", "images.pexels.com", "thumbs.dreamstime.com"],
},

---

-- In sections:

- Change all articles to blogs.
- Move static data file of blogs from articles to shared.
- Remove blogs static data after connecting with backend.
- Header => static data.
- Footer => static data.

---

<Container> => remove className prop

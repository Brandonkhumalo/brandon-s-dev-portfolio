# Deploying to Netlify and Vercel

Since you already have accounts with Netlify and Vercel, here are the steps to host your portfolio:

### 1. Vercel (Recommended for Vite/React)
Vercel has excellent built-in support for Vite projects.

1. **Push your code to GitHub**: Ensure your latest changes are in a GitHub repository.
2. **Import Project**: Log in to [Vercel](https://vercel.com), click "Add New" -> "Project".
3. **Connect GitHub**: Select your repository.
4. **Configure Project**:
   - **Framework Preset**: Vite (should be auto-detected)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. **Deploy**: Click "Deploy". Vercel will provide you with a production URL.

### 2. Netlify
Netlify is also a great choice for static site hosting.

1. **Connect to GitHub**: Log in to [Netlify](https://app.netlify.com), click "Add new site" -> "Import an existing project".
2. **Select Repository**: Connect your GitHub account and select the portfolio repo.
3. **Site Settings**:
   - **Branch to deploy**: `main`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. **Deploy Site**: Click "Deploy site". 

### Important Note for React Router
If you are using client-side routing, you may need a redirect rule:
- **For Netlify**: Create a file named `public/_redirects` with the content `/* /index.html 200`.
- **For Vercel**: Add a `vercel.json` to your root with:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```
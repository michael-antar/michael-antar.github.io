# Michael Antar - Personal Portfolio

My personal site, written with HTML and CSS. Deployed using GitHub Pages, with
Git LFS for demo videos.

## Run Locally

No dependencies to install. Serve the publish root and open
`http://127.0.0.1:4173/`:

```sh
python3 -m http.server 4173 --directory site
```

## Deployment

Pushing to `main` or dispatching the **Deploy static content to Pages** workflow
manually publishes `site/` to GitHub Pages through
`actions/upload-pages-artifact` and `actions/deploy-pages`. There is no build,
install, or test step; the workflow uploads the `site/` directory as-is.

The two demo videos are Git LFS objects. Run `git lfs pull` after cloning if they
arrive as pointer files.

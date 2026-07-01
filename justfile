dev:
    pnpm dev

build:
    pnpm build

deploy: build
    rsync -avz --delete ./dist/ olaren@adorableaxolotl.olaren.dev:/var/www/site-web

rm -r .next
rm -r .parcel-cache
rm -r node_modules
yarn
yarn run build
yarn run start
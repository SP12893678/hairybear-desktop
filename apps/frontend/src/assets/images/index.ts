// @index('./*.{png,jpg,jpeg}', (f, _) => `export { default as ${f.name.toUpperCase()} } from '${f.path}${f.ext}'`)
export { default as LOGO } from './logo.png'
// @endindex

// @index('./*.svg', (f, _) => `export { ReactComponent as Img${_.pascalCase(f.name)} } from '${f.path}${f.ext}'`)
export { ReactComponent as ImgClapping } from './clapping.svg'
export { ReactComponent as ImgDancing } from './dancing.svg'
export { ReactComponent as ImgJumping } from './jumping.svg'
export { ReactComponent as ImgPunching } from './punching.svg'
export { ReactComponent as ImgRunning } from './running.svg'
export { ReactComponent as ImgSitting } from './sitting.svg'
export { ReactComponent as ImgWalking } from './walking.svg'
export { ReactComponent as ImgWeaving } from './weaving.svg'
// @endindex

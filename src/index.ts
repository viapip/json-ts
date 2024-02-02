import { listenAndWatch } from 'listhen'

listenAndWatch('~/app', {
  name: 'schema',
  port: 3000,
})

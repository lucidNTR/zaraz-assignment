import { Manager } from '@managed-components/types'

export default function (manager: Manager) {
  manager.addEventListener('pageview', ({ client }) => {
    client.execute(`console.log('${new Date()}');`)
  })
}

import Link from 'next/link'
import { type Route } from '../../models'

interface Prop {
  links: Route[]
}

function Navigator ({ links }: Prop) {
  return (
    <>
        {
            links.map(link => (
                <Link href={link.path} key={link.path}>
                    {link.name}
                </Link>
            ))
        }
    </>
  )
}
export default Navigator

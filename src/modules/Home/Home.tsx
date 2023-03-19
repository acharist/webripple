import { FunctionComponent } from 'react'
import { Tags } from '@/components'

import { useTags } from '@/hooks'

export const HomeModule: FunctionComponent = (): JSX.Element => {
  const tags = useTags()

  return <div>{tags.isSuccess && <Tags tags={tags.data} />}</div>
}

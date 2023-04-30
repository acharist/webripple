import { FunctionComponent } from 'react'
import { IPost } from '@/api'

import styles from './Cards.module.scss'
import { Card } from './components'

const cards: IPost[] = [
  {
    id: '1',
    image: 'card.jpg',
    title: 'Web API о которых вы могли не знать',
    slug: 'Post6',
    content:
      'Несмотря на многочисленное разнообразие графических редакторов, photoshop для веб-дизайнера является пожалуй не заменимым инструментом.',
    published: null,
    created_at: '2023-03-30T18:25:58.812Z',
    updated_at: '2023-03-30T18:25:58.812Z',
    meta: [
      {
        id: '8',
        key: 'meta_keyword',
        content: '1',
      },
      {
        id: '9',
        key: 'meta_keyword',
        content: '2',
      },
      {
        id: '10',
        key: 'meta_title',
        content: 'metaTitle',
      },
      {
        id: '11',
        key: 'meta_description',
        content: 'metaDescription',
      },
    ],
    tags: [
      {
        id: '3',
        title: 'React',
        slug: 'react',
        created_at: '2023-03-18T21:31:24.049Z',
        updated_at: '2023-03-18T21:31:24.049Z',
      },
    ],
  },
  {
    id: '2',
    image: 'card.jpg',
    title: 'Web API о которых вы могли не знать',
    slug: 'Post7',
    content:
      'Веб-дизайнера является пожалуй не заменимым инструментом.',
    published: null,
    created_at: '2023-03-30T18:25:58.812Z',
    updated_at: '2023-03-30T18:25:58.812Z',
    meta: [
      {
        id: '8',
        key: 'meta_keyword',
        content: '1',
      },
      {
        id: '9',
        key: 'meta_keyword',
        content: '2',
      },
      {
        id: '10',
        key: 'meta_title',
        content: 'metaTitle',
      },
      {
        id: '11',
        key: 'meta_description',
        content: 'metaDescription',
      },
    ],
    tags: [
      {
        id: '3',
        title: 'React',
        slug: 'react',
        created_at: '2023-03-18T21:31:24.049Z',
        updated_at: '2023-03-18T21:31:24.049Z',
      },
    ],
  },
  {
    id: '3',
    image: 'card.jpg',
    title: 'Web API о которых вы могли не знать',
    slug: 'Post7',
    content:
      'Веб-дизайнера является пожалуй не заменимым инструментом.',
    published: null,
    created_at: '2023-03-30T18:25:58.812Z',
    updated_at: '2023-03-30T18:25:58.812Z',
    meta: [
      {
        id: '8',
        key: 'meta_keyword',
        content: '1',
      },
      {
        id: '9',
        key: 'meta_keyword',
        content: '2',
      },
      {
        id: '10',
        key: 'meta_title',
        content: 'metaTitle',
      },
      {
        id: '11',
        key: 'meta_description',
        content: 'metaDescription',
      },
    ],
    tags: [
      {
        id: '3',
        title: 'React',
        slug: 'react',
        created_at: '2023-03-18T21:31:24.049Z',
        updated_at: '2023-03-18T21:31:24.049Z',
      },
    ],
  },
  {
    id: '4',
    image: 'card.jpg',
    title: 'Web API о которых вы могли не знать',
    slug: 'Post7',
    content:
      'Веб-дизайнера является пожалуй не заменимым инструментом.',
    published: null,
    created_at: '2023-03-30T18:25:58.812Z',
    updated_at: '2023-03-30T18:25:58.812Z',
    meta: [
      {
        id: '8',
        key: 'meta_keyword',
        content: '1',
      },
      {
        id: '9',
        key: 'meta_keyword',
        content: '2',
      },
      {
        id: '10',
        key: 'meta_title',
        content: 'metaTitle',
      },
      {
        id: '11',
        key: 'meta_description',
        content: 'metaDescription',
      },
    ],
    tags: [
      {
        id: '3',
        title: 'React',
        slug: 'react',
        created_at: '2023-03-18T21:31:24.049Z',
        updated_at: '2023-03-18T21:31:24.049Z',
      },
    ],
  },
  {
    id: '5',
    image: 'card.jpg',
    title: 'Web API о которых вы могли не знать',
    slug: 'Post7',
    content:
      'Веб-дизайнера является пожалуй не заменимым инструментом.',
    published: null,
    created_at: '2023-03-30T18:25:58.812Z',
    updated_at: '2023-03-30T18:25:58.812Z',
    meta: [
      {
        id: '8',
        key: 'meta_keyword',
        content: '1',
      },
      {
        id: '9',
        key: 'meta_keyword',
        content: '2',
      },
      {
        id: '10',
        key: 'meta_title',
        content: 'metaTitle',
      },
      {
        id: '11',
        key: 'meta_description',
        content: 'metaDescription',
      },
    ],
    tags: [
      {
        id: '3',
        title: 'React',
        slug: 'react',
        created_at: '2023-03-18T21:31:24.049Z',
        updated_at: '2023-03-18T21:31:24.049Z',
      },
    ],
  },
  {
    id: '6',
    image: 'card.jpg',
    title: 'Web API о которых вы могли не знать',
    slug: 'Post7',
    content:
      'Веб-дизайнера является пожалуй не заменимым инструментом. Веб-дизайнера является пожалуй не заменимым инструментом. Веб-дизайнера является пожалуй не заменимым инструментом.',
    published: null,
    created_at: '2023-03-30T18:25:58.812Z',
    updated_at: '2023-03-30T18:25:58.812Z',
    meta: [
      {
        id: '8',
        key: 'meta_keyword',
        content: '1',
      },
      {
        id: '9',
        key: 'meta_keyword',
        content: '2',
      },
      {
        id: '10',
        key: 'meta_title',
        content: 'metaTitle',
      },
      {
        id: '11',
        key: 'meta_description',
        content: 'metaDescription',
      },
    ],
    tags: [
      {
        id: '3',
        title: 'React',
        slug: 'react',
        created_at: '2023-03-18T21:31:24.049Z',
        updated_at: '2023-03-18T21:31:24.049Z',
      },
    ],
  },
]

export const Cards: FunctionComponent = (): JSX.Element => {
  return (
    <div className={styles.root}>
      {cards.map((card) => (
        <Card data-testid="card" key={card.id} {...card} />
      ))}
    </div>
  )
}

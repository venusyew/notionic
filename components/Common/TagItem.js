import Link from 'next/link'

const TagItem = ({ tag }) => (
  <Link href={`/tag/${encodeURIComponent(tag)}`} scroll={false}>
    <p className='mr-2 rounded-full px-2 py-1 bg-orange-200 dark:bg-orange-700 hover:bg-orange-300 dark:hover:bg-orange-600 leading-none text-sm'>
      {tag}
    </p>
  </Link>
)

export default TagItem

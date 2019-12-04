import React from 'react'

const PageSelector = props => {
  const pageSelectorArray = []
  const allPages = Math.floor(props.noOfResults / props.resultsPerPage)

  if (props.thisPage != 1) {
    pageSelectorArray.push({
      pageValue: parseInt(props.thisPage) - 1,
      pageLabel: '<',
    })
  }

  //Add Pages 1 and 2 to pageSelectorArray
  pageSelectorArray.push({ pageValue: 1, pageLabel: '1' })
  pageSelectorArray.push({ pageValue: 2, pageLabel: '2' })

  // Determine next page that would need to be added
  let nextPage = Math.max(3, props.thisPage - 1)

  // If there is a gap, add an ellipsis element
  // prettier-ignore
  if (Math.abs(nextPage - pageSelectorArray[pageSelectorArray.length - 1].pageValue) > 1 ) {
    pageSelectorArray.push({ pageValue: -1, pageLabel: '..' })
  }

  // Add one page before, the page itself and one page after to pageSelectorArray
  for (let i = nextPage; i <= props.thisPage + 1; i++) {
    pageSelectorArray.push({ pageValue: i, pageLabel: i.toString() })
  }

  // nextPage()
  // if (Math.abs(next))
  return (
    <>
      {pageSelectorArray.map((page, index) => {
        return page.pageLabel + ', '
      })}
    </>
  )
}

export default PageSelector

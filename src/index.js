export default function (Alpine) {
  Alpine.directive(
    'table-of-content',
    (el, { value, modifiers, expression }, { Alpine, effect, cleanup }) => {
      effect(() => {
        const elHeadings = getHeadings(el)
        const elData = Alpine.$data(el)

        elData.tableOfContent = elHeadings
        elData.testContent = 'Does this work?'
      })
    }
  )
}

function getHeadings(parentEl) {
  const headingLevels = ['h2', 'h3', 'h4']

  const headingElements = [
    ...parentEl.querySelectorAll(headingLevels.join(',')),
  ]

  const groupedHeadings = headingElements.reduce(
    (headingItems, headingItem) => {
      const headingLevel = headingItem.tagName.slice(1)

      const { id: headingId, textContent } = headingItem

      const newHeading = {
        headingId,
        textContent,
      }

      if (headingLevel === '2') {
        headingItems.push([newHeading, []])
      }

      if (headingLevel === '3') {
        const lastItem = headingItems[headingItems.length - 1]

        lastItem[1].push([newHeading, []])
      }

      if (headingLevel === '4') {
        const lastItem = headingItems[headingItems.length - 1]
        const lastChildItem = lastItem[1][lastItem[1].length - 1]

        lastChildItem[1].push([newHeading, []])
      }

      return headingItems
    },
    []
  )

  const filteredHeadings = groupedHeadings.map((groupedHeading) => {
    const [headingItem, headingChildren] = groupedHeading

    if (!headingChildren.length) {
      return headingItem
    }

    const filteredChildren = headingChildren.map((headingChild) => {
      const [childHeading, childChildren] = headingChild

      if (!childChildren.length) {
        return childHeading
      }

      return {
        ...childHeading,
        headingChildren: childChildren.map((childChild) => {
          const [childChildHeading, childChildChildren] = childChild

          if (!childChildChildren.length) {
            return childChildHeading
          }

          return {
            ...childChildHeading,
            headingChildren: childChildChildren,
          }
        }),
      }
    })

    return {
      ...headingItem,
      headingChildren: filteredChildren,
    }
  })

  return filteredHeadings
}

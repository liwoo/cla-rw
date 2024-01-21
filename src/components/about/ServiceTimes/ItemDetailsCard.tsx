interface ItemDetailsProps {
  item?: {
    name: string
    description: string
    icon: any
  } | null
}

const ItemDetailsCard = ({ item }: ItemDetailsProps) => {
  return (
    <div>
      {item && (
        <>
          <div className="flex items-center text-2xl font-semibold text-tertiary">
            {item.name} <item.icon className="mx-2 my-4 h-6" />
          </div>
          <div className="max-w-sm text-white">{item.description}</div>
        </>
      )}
    </div>
  )
}

export default ItemDetailsCard

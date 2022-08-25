export type Icon = '' | 'github' | 'facebook'

export interface Field {
  username: string
  url: string
  description: string
  clientId: string
  icon: Icon
}

export interface FieldItemProps extends Field {
  editFunc: any
  deleteFunc: any
  icon: Icon
}

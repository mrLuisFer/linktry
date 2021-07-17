export const useGetFullName = (userConfig = {}) => {
  const firstNameLength = userConfig.firstName.length
  const lastNameLength = userConfig.lastName.length
  let fullName = ''
  const maxLength = 10

  if (lastNameLength > maxLength) {
    fullName = `${userConfig.firstName}`
  } else if (firstNameLength > maxLength) {
    fullName = `${userConfig.username}`
  } else if (firstNameLength > maxLength && lastNameLength > maxLength) {
    fullName = `${userConfig.username}`
  }
  fullName = `${userConfig.firstName} ${userConfig.lastName}`

  return fullName
}

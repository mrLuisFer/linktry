export const useGetFullName = (userConfig = {}) => {
  const firstNameLength = userConfig.firstName.length
  const lastNameLength = userConfig.lastName.length
  let fullName = ''

  if (lastNameLength > 10) {
    fullName = `${userConfig.firstName}`
  } else if (firstNameLength > 10) {
    fullName = `${userConfig.username}`
  } else if (firstNameLength > 10 && lastNameLength > 10) {
    fullName = `${userConfig.username}`
  }
  fullName = `${userConfig.firstName} ${userConfig.lastName}`

  return fullName
}

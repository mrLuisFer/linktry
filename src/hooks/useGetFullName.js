export const useGetFullName = (
  userConfig = { firstName: '', username: '', lastName: '' }
) => {
  const fullName = `${userConfig.firstName} ${userConfig.lastName}`
  if (fullName.length > 30) {
    return userConfig.username
  }
  return fullName
}

export interface UserInGroup {
  id: string
  name: string
  userName: string
  photoUrl?: string
  groupIds: string[]
}

export const userGroupDATA: UserInGroup[] = [
  {
    id: "1",
    name: "User 1",
    userName: "user123@gmail.com",
    photoUrl: "https://randomuser.me/api/portraits/lego/1.jpg",
    groupIds: ["1", "2"],
  },
  {
    id: "2",
    name: "User 2",
    userName: "user789@gmail.com",
    groupIds: ["1", "2"],
  },
  {
    id: "3",
    name: "User 3",
    userName: "user456@gmail.com",
    photoUrl: "https://randomuser.me/api/portraits/lego/3.jpg",
    groupIds: ["1", "2"],
  },
  {
    id: "4",
    name: "User 4",
    userName: "user789@gmail.com",
    photoUrl: "https://randomuser.me/api/portraits/lego/4.jpg",
    groupIds: ["1", "2"],
  },
]

export interface Group {
  id: string
  name: string
  host: UserInGroup
  createdAt: string
  updatedAt: string
  userGroup: UserInGroup[]
}

export const groupDATA: Group[] = [
  {
    id: "1",
    name: "Group 1",
    host: {
      id: "1",
      name: "User 1",
      userName: "user123@gmail.com",
      photoUrl: "https://randomuser.me/api/portraits/lego/1.jpg",
      groupIds: ["1", "2"],
    },
    createdAt: "2023-08-20T15:00:00.000Z", // Replace with the actual createdAt value
    updatedAt: "2023-08-20T15:00:00.000Z", // Replace with the actual updatedAt value
    userGroup: [
      {
        id: "1",
        name: "User 1",
        userName: "user123@gmail.com",
        photoUrl: "https://randomuser.me/api/portraits/lego/1.jpg",
        groupIds: ["1", "2"],
      },
      {
        id: "2",
        name: "User 2",
        userName: "user789@gmail.com",
        groupIds: ["1", "2"],
      },
    ],
  },
  {
    id: "2",
    name: "Group 2",
    host: {
      id: "3",
      name: "User 3",
      userName: "user123@gmail.com",
      photoUrl: "https://randomuser.me/api/portraits/lego/1.jpg",
      groupIds: ["1", "2"],
    },
    createdAt: "2023-08-20T15:00:00.000Z", // Replace with the actual createdAt value
    updatedAt: "2023-08-20T15:00:00.000Z", // Replace with the actual updatedAt value
    userGroup: [
      {
        id: "1",
        name: "User 1",
        userName: "user123@gmail.com",
        photoUrl: "https://randomuser.me/api/portraits/lego/1.jpg",
        groupIds: ["1", "2"],
      },
      {
        id: "3",
        name: "User 3",
        userName: "user123@gmail.com",
        photoUrl: "https://randomuser.me/api/portraits/lego/1.jpg",
        groupIds: ["1", "2"],
      },
      {
        id: "4",
        name: "User 4",
        userName: "user789@gmail.com",
        photoUrl: "https://randomuser.me/api/portraits/lego/2.jpg",
        groupIds: ["1", "2"],
      },
    ],
  },
]

export interface FavouriteRecipe {
  id: string
  recipeId: string
  userId: string
  createdAt: string
  updatedAt: string
}

export const favouriteRecipeDATA: FavouriteRecipe[] = [
  {
    id: "1",
    recipeId: "1",
    userId: "1",
    createdAt: "2023-08-20T15:00:00.000Z", // Replace with the actual createdAt value
    updatedAt: "2023-08-20T15:00:00.000Z", // Replace with the actual updatedAt value
  },
  {
    id: "2",
    recipeId: "2",
    userId: "2",
    createdAt: "2023-08-20T15:00:00.000Z", // Replace with the actual createdAt value
    updatedAt: "2023-08-20T15:00:00.000Z", // Replace with the actual updatedAt value
  },
]

export interface Food {
  id: string
  name: string
  imageUrl?: string
  unit: {
    id: string
    name: string
  }
  category: {
    id: string
    name: string
  }
  createdAt: string
  updatedAt: string
}

export const foodDATA: Food[] = [
  {
    id: "5f5f0f6f5e6e7d8c9b0a1b2c",
    name: "Pasta",
    imageUrl: "https://picsum.photos/200/300",
    unit: {
      id: "5f5f0f6f5e6e7d8c9b0a1b2c",
      name: "kg",
    },
    category: {
      id: "5f5f0f6f5e6e7d8c9b0a1b2c",
      name: "Food",
    },
    createdAt: "2023-08-20T15:00:00.000Z",
    updatedAt: "2023-08-20T15:00:00.000Z",
  },
  {
    id: "5f5f0f6f5e6e7d8c9b0a1b3c",
    name: "Rice",
    imageUrl: "https://picsum.photos/200/300",
    unit: {
      id: "5f5f0f6f5e6e7d8c9b0a1b4c",
      name: "kg",
    },
    category: {
      id: "5f5f0f6f5e6e7d8c9b0a156c",
      name: "Food",
    },
    createdAt: "2023-08-20T15:00:00.000Z",
    updatedAt: "2023-08-20T15:00:00.000Z",
  },
  {
    id: "5f5f0f6f5e6e7d8c9b0a1b5c",
    name: "Beans",
    imageUrl: "https://picsum.photos/200/300",
    unit: {
      id: "5f5f0f6f5e6e7d8c9b0a1b6c",
      name: "kg",
    },
    category: {
      id: "5f5f0f6f5e6e7d8c9b0a1b7c",
      name: "Food",
    },
    createdAt: "2023-08-20T15:00:00.000Z",
    updatedAt: "2023-08-20T15:00:00.000Z",
  },
  {
    id: "5f5f0f6f5e6e7d8c9b0a1b8c",
    name: "Tomatoes",
    imageUrl: "https://picsum.photos/200/300",
    unit: {
      id: "5f5f0f6f5e6e7d8c9b0a1b9c",
      name: "kg",
    },
    category: {
      id: "5f5f0f6f5e6e7d8c9b0a1b10c",
      name: "Food",
    },
    createdAt: "2023-08-20T15:00:00.000Z",
    updatedAt: "2023-08-20T15:00:00.000Z",
  },
]

export interface Recipe {
  id: string
  name: string
  imageUrl: string
  description?: string
  htmlContent?: string
  ingredients: [
    {
      id: string
      name: string
      imageUrl: string
      unit: {
        id: string
        name: string
      }
      category: {
        id: string
        name: string
      }
    },
  ]
  isFavourite: boolean
  createdAt: string
  updatedAt: string
}

export const recipeDATA: Recipe[] = [
  {
    id: "5f5f0f6f5e6e7d8c9b0a1b2c",
    name: "Pasta",
    imageUrl: "https://picsum.photos/200/300",
    description: "This is a description",
    htmlContent: "<p>This is HTML content</p>",
    ingredients: [
      {
        id: "5f5f0f6f5e6e7d8c9b0a1b2c",
        name: "Pasta",
        imageUrl: "https://picsum.photos/200/300",
        unit: {
          id: "5f5f0f6f5e6e7d8c9b0a1b2c",
          name: "kg",
        },
        category: {
          id: "5f5f0f6f5e6e7d8c9b0a1b2c",
          name: "Food",
        },
      },
    ],
    isFavourite: false,
    createdAt: "2023-08-20T15:00:00.000Z", // Replace with the actual createdAt value
    updatedAt: "2023-08-20T15:00:00.000Z", // Replace with the actual updatedAt value
  },
  {
    id: "5f5f0f6f5e6e7d8c9b0a1b3c",
    name: "Rice",
    imageUrl: "https://picsum.photos/200/300",
    description: "This is a description",
    htmlContent: "<p>This is HTML content</p>",
    ingredients: [
      {
        id: "5f5f0f6f5e6e7d8c9b0a1b4c",
        name: "Rice",
        imageUrl: "https://picsum.photos/200/300",
        unit: {
          id: "5f5f0f6f5e6e7d8c9b0a1b4c",
          name: "kg",
        },
        category: {
          id: "5f5f0f6f5e6e7d8c9b0a1b4c",
          name: "Food",
        },
      },
    ],
    isFavourite: true,
    createdAt: "2023-08-20T15:00:00.000Z", // Replace with the actual createdAt value
    updatedAt: "2023-08-20T15:00:00.000Z", // Replace with the actual updatedAt value
  },
  {
    id: "5f5f0f6f5e6e7d8c9b0a1b5c",
    name: "Salad",
    imageUrl: "https://picsum.photos/200/300",
    description: "This is a description",
    htmlContent: "<p>This is HTML content</p>",
    ingredients: [
      {
        id: "5f5f0f6f5e6e7d8c9b0a1b6c",
        name: "Salad",
        imageUrl: "https://picsum.photos/200/300",
        unit: {
          id: "5f5f0f6f5e6e7d8c9b0a1b6c",
          name: "kg",
        },
        category: {
          id: "5f5f0f6f5e6e7d8c9b0a1b6c",
          name: "Food",
        },
      },
    ],
    isFavourite: false,
    createdAt: "2023-08-20T15:00:00.000Z", // Replace with the actual createdAt value
    updatedAt: "2023-08-20T15:00:00.000Z", // Replace with the actual updatedAt value
  },
]

export enum StatusMeal {
  NOT_PASS_YET = "Chưa ăn",
  DONE = "Đã hoàn thành",
  CANCELLED = "Huỷ",
}

export interface Meal {
  id: string
  timeStamps: Date
  userId: string
  status: StatusMeal
  foods: [
    {
      id: string
      name: string
      imageUrl: string
      unit: {
        id: string
        name: string
      }
      category: {
        id: string
        name: string
      }
    },
  ]
  createdAt: Date
  updatedAt: Date
}

export const mealDATA: Meal[] = [
  {
    id: "5f5f0f6f5e6e7d8c9b0a1b2c",
    timeStamps: new Date("2023-08-20T15:00:00.000Z"),
    userId: "5f5f0f6f5e6e7d8c9b0a1b2c",
    status: StatusMeal.NOT_PASS_YET,
    foods: [
      {
        id: "5f5f0f6f5e6e7d8c9b0a1b2c",
        name: "Pasta",
        imageUrl: "https://picsum.photos/200/300",
        unit: {
          id: "5f5f0f6f5e6e7d8c9b0a1b2c",
          name: "kg",
        },
        category: {
          id: "5f5f0f6f5e6e7d8c9b0a1b2c",
          name: "Food",
        },
      },
    ],
    createdAt: new Date("2023-08-20T15:00:00.000Z"), // Replace with the actual createdAt value
    updatedAt: new Date("2023-08-20T15:00:00.000Z"), // Replace with the actual updatedAt value
  },
]

export interface Fridge {
  id: string
  food: {
    id: string
    name: string
    imageUrl: string
    unit: {
      id: string
      name: string
    }
    category: {
      id: string
      name: string
    }
  }
  quantity: number
  expiryDate?: Date
  note?: string
  // Người đặt món vào tủ
  userId: string
  groupId: string
  createdAt: string
  updatedAt: string
}

export const fridgeDATA: Fridge[] = [
  {
    id: "5f5f0f6f5e6e7d8c9b0a1b2c",
    food: {
      id: "5f5f0f6f5e6e7d8c9b0a1b2c",
      name: "Pasta",
      imageUrl: "https://picsum.photos/200/300",
      unit: {
        id: "5f5f0f6f5e6e7d8c9b0a1b2c",
        name: "kg",
      },
      category: {
        id: "5f5f0f6f5e6e7d8c9b0a1b2c",
        name: "Food",
      },
    },
    quantity: 2,
    expiryDate: new Date("2023-08-20T15:00:00.000Z"),
    note: "This is a note",
    userId: "5f5f0f6f5e6e7d8c9b0a1b2c",
    groupId: "5f5f0f6f5e6e7d8c9b0a1b2c",
    createdAt: "2023-08-20T15:00:00.000Z", // Replace with the actual createdAt value
    updatedAt: "2023-08-20T15:00:00.000Z", // Replace with the actual updatedAt value
  },
]

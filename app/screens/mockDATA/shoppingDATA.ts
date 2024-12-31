export interface ShoppingList {
  id: string
  name: string
  note?: string
  // Người tạo danh sách
  userId: string
  groupId?: string
  // Người được phân công mua
  assignedUserId: string
  // Task Done: Danh sách được phân công mua đã hoàn thành
  marked: boolean
  createdAt: Date
  updatedAt: Date
}
export const shoppingLocalDATA: ShoppingList[] = [
  {
    id: "5f5f0f6f5e6e7d8c9b0a1b2c",
    name: "Shopping List 1",
    note: "This is a note",
    userId: "5f5f0f6f5e6e7d8c9b0a1b2c",
    assignedUserId: "5f5f0f6f5e6e7d8c9b0a1b2c",
    marked: false,
    createdAt: new Date("2024-12-31T23:59:59Z"),
    updatedAt: new Date("2025-01-31T23:59:59Z"),
  },
  {
    id: "5f5f0f6f5e6e7d8c9b0a1b34",
    name: "Shopping List 2",
    userId: "5f5f0f6f5e6e7d8c9b0a12ry",
    assignedUserId: "5f5f0f6f5e6e7d8c9b0a12ry",
    marked: false,
    createdAt: new Date("2024-12-31T23:59:59Z"),
    updatedAt: new Date("2025-01-31T23:59:59Z"),
  },
  {
    id: "5f5f0f6f5e6e7d8c9b0a1b34",
    name: "Shopping List 3",
    note: "This is a note This is a note This is a note This is a note",
    userId: "5f5f0f6f5e6e7d8c9b0a12ry",
    assignedUserId: "5f5f0f6f5e6e7d8c9b0a12ry",
    marked: false,
    createdAt: new Date("2024-12-31T23:59:59Z"),
    updatedAt: new Date("2025-01-31T23:59:59Z"),
  },
  {
    id: "5f5f0f6f5e6e7d8c9b0a1b34",
    name: "Shopping List 4",
    userId: "5f5f0f6f5e6e7d8c9b0a12ry",
    assignedUserId: "5f5f0f6f5e6e7d8c9b0a12ry",
    marked: false,
    createdAt: new Date("2024-12-31T23:59:59Z"),
    updatedAt: new Date("2025-01-31T23:59:59Z"),
  },
  {
    id: "5f5f0f6f5e6e7d8c9b0a1b34",
    name: "Shopping List 5",
    userId: "5f5f0f6f5e6e7d8c9b0a12ry",
    assignedUserId: "5f5f0f6f5e6e7d8c9b0a12ry",
    marked: false,
    createdAt: new Date("2024-12-31T23:59:59Z"),
    updatedAt: new Date("2025-01-31T23:59:59Z"),
  },
]

export const shoppingAssignedDATA: ShoppingList[] = [
  {
    id: "5f5f0f6f5e6e7d8c9b0a1b2c",
    name: "Shopping List 1",
    note: "This is a note",
    userId: "5f5f0f6f5e6e7d8c9b0a234c",
    groupId: "5f5f0f6f5e6e7d8c9b0a1b2c",
    assignedUserId: "5f5f0f6f5e6e7d8c9b0a1b2c",
    marked: false,
    createdAt: new Date("2024-12-31T23:59:59Z"),
    updatedAt: new Date("2025-01-31T23:59:59Z"),
  },
  {
    id: "5f5f0f6f5e6e7d8c9b0a1b34",
    name: "Shopping List 2",
    note: "This is a note",
    userId: "5f5f0f6f5e6e7d8c9b0a1b2c",
    groupId: "5f5f0f6f5e6e7d8c9b0a1123",
    assignedUserId: "5f5f0f6f5e6e7d8c9b0a1b2c",
    marked: false,
    createdAt: new Date("2024-12-31T23:59:59Z"),
    updatedAt: new Date("2025-01-31T23:59:59Z"),
  },
  {
    id: "5f5f0f6f5e6e7d8c9b0a1b34",
    name: "Shopping List 3",
    userId: "5f5f0f6f246e7d8c9b0a1b2c",
    groupId: "5f5f0f6f5e6e7d1wdb0a1123",
    assignedUserId: "5f5f0f6f5e6e7d8c9b0a1b2c",
    marked: false,
    createdAt: new Date("2024-12-31T23:59:59Z"),
    updatedAt: new Date("2025-01-31T23:59:59Z"),
  },
  {
    id: "5f5f0f6f5e6e7d8c9b0a1b34",
    name: "Shopping List 4",
    note: "This is a note",
    userId: "5f512f6f5e6e7d8c9b0a1b2c",
    groupId: "5f5f0f6f5e6e7efv9b0a1123",
    assignedUserId: "5f5f0f6f5e6e7d8c9b0a1b2c",
    marked: false,
    createdAt: new Date("2024-12-31T23:59:59Z"),
    updatedAt: new Date("2025-01-31T23:59:59Z"),
  },
]

export const shoppingAssignGroupDATA: ShoppingList[] = [
  {
    id: "5f5f0f6f5e6e7d8c9b0a1b2c",
    name: "Shopping List 1",
    note: "This is a note",
    userId: "5f5f0f6f5e6e7d8c9b0a234c",
    groupId: "5f5f0f6f5e6e7d8c9b0a1b2c",
    assignedUserId: "5f5f0f6f5e6e7d8c9b0a1b2c",
    marked: false,
    createdAt: new Date("2024-12-31T23:59:59Z"),
    updatedAt: new Date("2025-01-31T23:59:59Z"),
  },
  {
    id: "5f5f0f6f5e6e7d8c9b0a1b34",
    name: "Shopping List 2",
    note: "This is a note",
    userId: "5f5f0f6f5e6e7d8c9b0a234c",
    groupId: "5f5f0f6f5e6e7d8c9b0a1b2c",
    assignedUserId: "5f5f0f6f5e6e7d8c9b0a1b2c",
    marked: false,
    createdAt: new Date("2024-12-31T23:59:59Z"),
    updatedAt: new Date("2025-01-31T23:59:59Z"),
  },
  {
    id: "5f5f0f6f5e6e7d8c9b0a1b34",
    name: "Shopping List 3",
    userId: "5f5f0f6f5e6e7d8c9b0a234c",
    groupId: "5f5f0f6f5e6e7d8c9b0a1b2c",
    assignedUserId: "5f5f0f6f5e6e7d8c9b0a1b2c",
    marked: false,
    createdAt: new Date("2024-12-31T23:59:59Z"),
    updatedAt: new Date("2025-01-31T23:59:59Z"),
  },
  {
    id: "5f5f0f6f5e6e7d8c9b0a1b34",
    name: "Shopping List 4",
    note: "This is a note",
    userId: "5f5f0f6f5e6e7d8c9b0a234c",
    groupId: "5f5f0f6f5e6e7d8c9b0a1b2c",
    assignedUserId: "5f5f0f6f5e6e7d8c9b0a1b2c",
    marked: false,
    createdAt: new Date("2024-12-31T23:59:59Z"),
    updatedAt: new Date("2025-01-31T23:59:59Z"),
  },
]

export interface Task {
  listId: string
  food: {
    name: string
    imageUrl: string
    unit: {
      // VD: "kg", "ml"
      name: string
    }
    category: {
      // VD: "Food", "Ingredient"
      name: string
    }
  }
  quantity: number
  marked: boolean
  createdAt: string
  updatedAt: string
}

export const taskDATA: Task[] = [
  {
    listId: "5f5f0f6f5e6e7d8c9b0a1b2c",
    food: {
      name: "Pasta",
      imageUrl: "https://picsum.photos/200/300",
      unit: {
        name: "kg",
      },
      category: {
        name: "Food",
      },
    },
    quantity: 2,
    marked: false,
    createdAt: "2024-12-31T23:59:59Z",
    updatedAt: "2025-01-31T23:59:59Z",
  },
  {
    listId: "5f5f0f6f5e6e7d8c9b0a1b2c",
    food: {
      name: "Rice",
      imageUrl: "https://picsum.photos/200/300",
      unit: {
        name: "kg",
      },
      category: {
        name: "Food",
      },
    },
    quantity: 1,
    marked: false,
    createdAt: "2024-12-31T23:59:59Z",
    updatedAt: "2025-01-31T23:59:59Z",
  },
]

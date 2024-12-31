import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { AuthStoreModel } from "./auth/AuthStore"

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
  authStore: types.optional(AuthStoreModel, {} as any),
  // authenticationStore: types.optional(AuthenticationStoreModel, {}), // @demo remove-current-line
  // episodeStore: types.optional(EpisodeStoreModel, {}), // @demo remove-current-line
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}
/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}

// @mst remove-file

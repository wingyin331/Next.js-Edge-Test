import { Cart } from '../../types'
import { CommerceError, ValidationError } from '@commerce/utils/errors'

import {
  CheckoutLineItemsAddPayload,
  CheckoutLineItemsRemovePayload,
  CheckoutLineItemsUpdatePayload,
  Maybe,
} from '../../schema'
import { normalizeCart } from '../../utils'

export type CheckoutPayload =
  | CheckoutLineItemsAddPayload
  | CheckoutLineItemsUpdatePayload
  | CheckoutLineItemsRemovePayload

const checkoutToCart = (checkoutPayload?: Maybe<CheckoutPayload>): Cart => {
  if (!checkoutPayload) {
    throw new CommerceError({
      message: 'Invalid response from Swell',
    })
  }

  return normalizeCart(checkoutPayload)
}

export default checkoutToCart

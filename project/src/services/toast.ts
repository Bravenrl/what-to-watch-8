import { toast } from 'react-toastify';
import { HttpCode, ToastMessage } from './const';

export const createToast = (status: unknown): void => {
  switch (status) {
    case HttpCode.Unauthorised:
      toast.warning(ToastMessage.Unauthorised);
      break;
    case HttpCode.BadRequest:
      toast.warning(ToastMessage.BadRequest);
      break;
    default:
      toast.error(ToastMessage.NetworkError);
      break;
  }
};

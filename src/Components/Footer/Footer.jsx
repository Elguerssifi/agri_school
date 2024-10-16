import Container from "../Container/Container"
import styles from "./Footer.module.css"
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.row}>
          <div className={styles.logo_links}>
            <div className={styles.logo}>
              <img src="/Assets/images/logo.png" alt="logo accademy" />
            </div>
            <div className={styles.links}>
              <ul>
                <li><a href="">{t('footer.contact')}</a></li>
                <li><a href="">{t('footer.courses')}</a></li>
                <li><a href="">{t('footer.about')}</a></li>
                <li><a href="">{t('footer.home')}</a></li>
              </ul>
            </div>
          </div>
          <div className={styles.social_media_links}>
            <ul>
              <li>
                <a href="">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9999 5.3335C15.9999 4.3335 15.9999 4.3335 15.9998 4.3335H15.9994L15.998 4.3335L15.9928 4.3335L15.9725 4.33352L15.8942 4.33365C15.8256 4.3338 15.7251 4.3341 15.5966 4.3347C15.3396 4.33591 14.9703 4.33832 14.5201 4.34314C13.6201 4.35276 12.3951 4.37203 11.0969 4.4106C9.80029 4.44913 8.4226 4.50716 7.2197 4.5949C6.04478 4.68059 4.9519 4.79973 4.27492 4.98078L4.26105 4.9846C3.46404 5.21009 2.74066 5.64191 2.16395 6.23645C1.58725 6.83099 1.17765 7.56719 0.97654 8.37069C0.97113 8.3923 0.966444 8.41409 0.962489 8.43602C0.532253 10.8218 0.321631 13.242 0.333267 15.6662C0.318276 18.1086 0.528913 20.5473 0.962497 22.951C0.968355 22.9835 0.975817 23.0157 0.984856 23.0474C1.20658 23.8259 1.62535 24.5341 2.20071 25.1036C2.77607 25.673 3.48857 26.0844 4.26936 26.298L4.27492 26.2995C4.9519 26.4806 6.04478 26.5997 7.2197 26.6854C8.4226 26.7732 9.80029 26.8312 11.0969 26.8697C12.3951 26.9083 13.6201 26.9276 14.5201 26.9372C14.9703 26.942 15.3396 26.9444 15.5966 26.9456C15.7251 26.9462 15.8256 26.9465 15.8942 26.9467L15.9725 26.9468L15.9928 26.9468L15.998 26.9468H15.9994H15.9998C15.9999 26.9468 15.9999 26.9468 15.9999 25.9468C15.9999 26.9468 16 26.9468 16.0001 26.9468H16.0005H16.0019L16.0071 26.9468L16.0274 26.9468L16.1057 26.9467C16.1743 26.9465 16.2748 26.9462 16.4033 26.9456C16.6603 26.9444 17.0296 26.942 17.4798 26.9372C18.3798 26.9276 19.6048 26.9083 20.903 26.8697C22.1996 26.8312 23.5773 26.7732 24.7802 26.6854C25.9551 26.5997 27.048 26.4806 27.725 26.2995L27.7388 26.2957C28.5359 26.0702 29.2592 25.6384 29.8359 25.0439C30.4126 24.4493 30.8222 23.7131 31.0234 22.9096C31.0288 22.888 31.0335 22.8662 31.0374 22.8443C31.4644 20.4763 31.675 18.0743 31.6666 15.6682C31.6817 13.2255 31.471 10.7866 31.0374 8.38265L30.0533 8.56016L31.0234 8.31736C30.8222 7.51385 30.4126 6.77765 29.8359 6.18311C29.2592 5.58857 28.5359 5.15675 27.7388 4.93126C27.7272 4.92798 27.7156 4.9249 27.7038 4.92204C27.0348 4.75866 25.9492 4.65022 24.7739 4.57196C23.5728 4.49197 22.1965 4.43903 20.9004 4.40386C19.6029 4.36866 18.3785 4.35108 17.4789 4.34229C17.0289 4.3379 16.6598 4.3357 16.4029 4.3346C16.2744 4.33405 16.174 4.33377 16.1055 4.33363L16.0273 4.33351L16.0071 4.3335L16.0019 4.3335L16.0005 4.3335H16.0001C16 4.3335 15.9999 4.3335 15.9999 5.3335ZM15.9999 5.3335L15.9999 6.3335H15.9997L15.9985 6.3335L15.9938 6.3335L15.9746 6.33351L15.8986 6.33364C15.8316 6.33379 15.7328 6.33409 15.606 6.33468C15.3524 6.33587 14.9871 6.33825 14.5415 6.34302C13.6498 6.35256 12.4381 6.37163 11.1563 6.40972C9.87294 6.44786 8.5273 6.50483 7.36519 6.5896C6.18097 6.67597 5.27032 6.78617 4.7986 6.91103C4.343 7.04123 3.92951 7.28878 3.59954 7.62896C3.27509 7.96344 3.04262 8.37588 2.9244 8.82624C2.51981 11.082 2.32195 13.3701 2.33327 15.6619L2.33332 15.6731H2.33326C2.3188 17.9765 2.51566 20.2763 2.92134 22.5437C3.05184 22.9741 3.2876 23.3654 3.60757 23.682C3.93776 24.0088 4.34649 24.2451 4.79441 24.3682C5.2649 24.4935 6.17744 24.6041 7.36519 24.6907C8.5273 24.7755 9.87294 24.8325 11.1563 24.8706C12.4381 24.9087 13.6498 24.9278 14.5415 24.9373C14.9871 24.9421 15.3524 24.9445 15.606 24.9456C15.7328 24.9462 15.8316 24.9465 15.8986 24.9467L15.9746 24.9468L15.9938 24.9468L15.9985 24.9468H15.9997H15.9999L15.9999 25.9468L16 24.9468H16.0002H16.0014L16.0061 24.9468L16.0253 24.9468L16.1013 24.9467C16.1683 24.9465 16.2671 24.9462 16.3939 24.9456C16.6475 24.9445 17.0128 24.9421 17.4584 24.9373C18.3501 24.9278 19.5618 24.9087 20.8436 24.8706C22.127 24.8325 23.4726 24.7755 24.6347 24.6907C25.8189 24.6044 26.7295 24.4942 27.2013 24.3693C27.6569 24.2391 28.0704 23.9916 28.4004 23.6514C28.7248 23.3169 28.9573 22.9045 29.0755 22.4541C29.4769 20.2154 29.6748 17.9449 29.6666 15.6704L29.6666 15.6605H29.6666C29.6811 13.3514 29.4833 11.0458 29.0755 8.77293C28.9573 8.32255 28.7248 7.91011 28.4004 7.57563C28.0729 7.23802 27.6632 6.99165 27.2116 6.86067C26.7292 6.74584 25.8162 6.6458 24.641 6.56754C23.4771 6.49003 22.1301 6.43796 20.8462 6.40313C19.5637 6.36833 18.3514 6.35091 17.4593 6.3422C17.0135 6.33784 16.648 6.33567 16.3943 6.33458C16.2675 6.33404 16.1685 6.33377 16.1015 6.33363L16.0254 6.33351L16.0061 6.3335L16.0014 6.3335L16.0002 6.3335H16L15.9999 5.3335ZM13.4943 10.4376C13.1848 10.2615 12.805 10.2634 12.4972 10.4425C12.1894 10.6215 12 10.9507 12 11.3068V20.0268C12 20.3829 12.1894 20.7122 12.4972 20.8912C12.805 21.0703 13.1848 21.0721 13.4943 20.8961L21.161 16.5361C21.4736 16.3583 21.6667 16.0264 21.6667 15.6668C21.6667 15.3072 21.4736 14.9753 21.161 14.7976L13.4943 10.4376ZM18.6438 15.6668L14 18.3078V13.0259L18.6438 15.6668Z" fill="#87BF52"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href="">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.66675 5.33317C3.66675 4.4127 4.41294 3.6665 5.33341 3.6665C6.25389 3.6665 7.00008 4.4127 7.00008 5.33317C7.00008 6.25364 6.25389 6.99984 5.33341 6.99984C4.41294 6.99984 3.66675 6.25364 3.66675 5.33317ZM5.33341 1.6665C3.30837 1.6665 1.66675 3.30813 1.66675 5.33317C1.66675 7.35821 3.30837 8.99984 5.33341 8.99984C7.35846 8.99984 9.00008 7.35821 9.00008 5.33317C9.00008 3.30813 7.35846 1.6665 5.33341 1.6665ZM21.3334 11.6665C19.4769 11.6665 17.6964 12.404 16.3837 13.7168C15.0709 15.0295 14.3334 16.81 14.3334 18.6665V26.9998H17.6667V18.6665C17.6667 17.694 18.0531 16.7614 18.7407 16.0738C19.4283 15.3861 20.361 14.9998 21.3334 14.9998C22.3059 14.9998 23.2385 15.3861 23.9261 16.0738C24.6138 16.7614 25.0001 17.694 25.0001 18.6665V26.9998H28.3334V18.6665C28.3334 16.81 27.5959 15.0295 26.2832 13.7168C24.9704 12.404 23.1899 11.6665 21.3334 11.6665ZM21.3334 9.6665C18.9465 9.6665 16.6573 10.6147 14.9695 12.3025C13.2816 13.9904 12.3334 16.2796 12.3334 18.6665V27.9998C12.3334 28.5521 12.7811 28.9998 13.3334 28.9998H18.6667C19.219 28.9998 19.6667 28.5521 19.6667 27.9998V18.6665C19.6667 18.2245 19.8423 17.8006 20.1549 17.488C20.4675 17.1754 20.8914 16.9998 21.3334 16.9998C21.7754 16.9998 22.1994 17.1754 22.5119 17.488C22.8245 17.8006 23.0001 18.2245 23.0001 18.6665V27.9998C23.0001 28.5521 23.4478 28.9998 24.0001 28.9998H29.3334C29.8857 28.9998 30.3334 28.5521 30.3334 27.9998V18.6665C30.3334 16.2796 29.3852 13.9904 27.6974 12.3025C26.0096 10.6147 23.7204 9.6665 21.3334 9.6665ZM1.66675 11.9998C1.66675 11.4476 2.11446 10.9998 2.66675 10.9998H8.00008C8.55237 10.9998 9.00008 11.4476 9.00008 11.9998V27.9998C9.00008 28.5521 8.55237 28.9998 8.00008 28.9998H2.66675C2.11446 28.9998 1.66675 28.5521 1.66675 27.9998V11.9998ZM3.66675 12.9998V26.9998H7.00008V12.9998H3.66675Z" fill="#87BF52"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href="">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.33342 3.6665C6.2038 3.6665 3.66675 6.20356 3.66675 9.33317V22.6665C3.66675 25.7961 6.2038 28.3332 9.33342 28.3332H22.6667C25.7964 28.3332 28.3334 25.7961 28.3334 22.6665V9.33317C28.3334 6.20356 25.7964 3.6665 22.6667 3.6665H9.33342ZM1.66675 9.33317C1.66675 5.09899 5.09923 1.6665 9.33342 1.6665H22.6667C26.9009 1.6665 30.3334 5.09899 30.3334 9.33317V22.6665C30.3334 26.9007 26.9009 30.3332 22.6667 30.3332H9.33342C5.09923 30.3332 1.66675 26.9007 1.66675 22.6665V9.33317ZM16.6933 11.6557C15.7917 11.522 14.8709 11.676 14.0619 12.0958C13.2529 12.5156 12.5968 13.1798 12.187 13.9939C11.7772 14.8081 11.6346 15.7307 11.7794 16.6306C11.9242 17.5305 12.3491 18.3618 12.9936 19.0063C13.6381 19.6508 14.4694 20.0756 15.3693 20.2204C16.2692 20.3652 17.1918 20.2226 18.0059 19.8128C18.8201 19.403 19.4843 18.747 19.9041 17.9379C20.3239 17.1289 20.4779 16.2081 20.3442 15.3065C20.2078 14.3868 19.7792 13.5354 19.1218 12.878C18.4644 12.2206 17.613 11.7921 16.6933 11.6557ZM13.1408 10.3205C14.3232 9.70699 15.669 9.48191 16.9867 9.67731C18.3308 9.87663 19.5752 10.503 20.536 11.4638C21.4969 12.4246 22.1232 13.669 22.3225 15.0131C22.5179 16.3309 22.2929 17.6767 21.6793 18.8591C21.0658 20.0415 20.095 21.0004 18.9051 21.5993C17.7152 22.1982 16.3667 22.4067 15.0515 22.195C13.7363 21.9834 12.5213 21.3624 11.5794 20.4205C10.6374 19.4785 10.0164 18.2635 9.80481 16.9483C9.59317 15.6331 9.80164 14.2846 10.4005 13.0947C10.9995 11.9048 11.9583 10.9341 13.1408 10.3205ZM23.3334 7.6665C22.7811 7.6665 22.3334 8.11422 22.3334 8.6665C22.3334 9.21879 22.7811 9.6665 23.3334 9.6665H23.3467C23.899 9.6665 24.3467 9.21879 24.3467 8.6665C24.3467 8.11422 23.899 7.6665 23.3467 7.6665H23.3334Z" fill="#87BF52"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href="">
                  <svg width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.9999 1.6665H11.9999C10.2318 1.6665 8.53612 2.36888 7.28587 3.61913C6.03563 4.86937 5.33325 6.56506 5.33325 8.33317V12.3332H1.33325V17.6665H5.33325V28.3332H10.6666V17.6665H14.6666L15.9999 12.3332H10.6666V8.33317C10.6666 7.97955 10.8071 7.64041 11.0571 7.39036C11.3072 7.14031 11.6463 6.99984 11.9999 6.99984H15.9999V1.6665Z" stroke="#87BF52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
          <div className={styles.copyright}>
            <span>جميع الحقوق محفوظة </span>
            <span>Agrischool Academy 2024</span>
          </div>
      </Container>
    </footer>
  )
}
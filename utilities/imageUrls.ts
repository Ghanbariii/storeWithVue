export const GetSliderImage = (imageName: string): string => {
  return "https://shop-api.codeyad-project.ir/images/sliders/" + imageName;
  //return "codeyad/images/sliders/" + imageName;
};
export const GetCategoryImage = (imageName: string): string => {
  return "codeyad/images/categories/" + imageName;
};
export const GetBannerImage = (imageName: string): string => {
  return "https://shop-api.codeyad-project.ir/images/banners/" + imageName;
};
export const GetProductImage = (imageName: string): string => {
  return "http://shop-api.codeyad.ir/images/products/" + imageName;
};
export const GetUserAvatar = (imageName: string): string => {
  //return "codeyad/images/users/avatar/" + imageName;
  return "http://shop-api.codeyad.ir/images/users/avatar/" + imageName;
};
export const GetProductGalleryImage = (imageName: string): string => {
  return "http://shop-api.codeyad-project.ir/images/products/gallery/" + imageName;
  //return "codeyad/images/products/gallery/" + imageName;
};
export const GetProductGalleryImageFromDomain = (imageName: string): string => {
  return (
    "https://shop-api.codeyad-project.ir/images/products/gallery/" + imageName
  );
};
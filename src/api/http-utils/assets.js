import apiService from "../axios";

export const fetchAssets = async () => {
  const response = await apiService.get('/assets');
  return response.data;
};

export const createAsset = async (asset) => {
  await apiService.post('/assets', asset);
};

export const deleteAsset = async (id) => {
  await apiService.delete(`/assets/${id}`);
};

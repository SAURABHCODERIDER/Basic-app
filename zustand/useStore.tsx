import create from 'zustand';

const useStore = create(set => ({
  data: [],
  isLoading: false,
  error: null,
  fetchData: async () => {
    set({isLoading: true, error: null});
    try {
      // Simulate fetching data (replace with your API call)
      const response = await fetch('https://api.example.com/data');
      const result = await response.json();
      set({data: result, isLoading: false});
    } catch (err) {
      set({error: 'Failed to fetch data', isLoading: false});
    }
  },
  refreshData: async () => {
    // eslint-disable-next-line prettier/prettier
    set({ isLoading: true, error: null });
    try {
      // Refresh data logic
      const response = await fetch('https://api.example.com/data');
      const result = await response.json();
      set({data: result, isLoading: false});
    } catch (err) {
      set({error: 'Failed to refresh data', isLoading: false});
    }
  },
}));
export default useStore;

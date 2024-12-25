import { defineStore } from "pinia";
import { ref } from "vue";
type Book = {
  title: string;
  author: string;
  genre: string;
  id: String;
  year: Number;
  coverImage: String;
  isFavorite: Boolean;
};

export const useBookStore = defineStore("bookStore", () => {
  const config = useRuntimeConfig();
  const apiBase = config.public.apiBase;
  const books = ref(<Book[] | any>[]);
  const isLoading = ref(<Boolean>false);
  const isLoadingUpdate = ref(<Boolean>false);
  const currentBook = ref(<Book | null>{});
  const page = ref<Number>(1);
  const limit = ref<Number>(10);
  const searchQuery = ref<String>("");

  const getQueryParams = () => {
    const query = <any>{
      page: page.value,
      page_size: limit.value,
    };

    if (searchQuery.value) {
      query.search = searchQuery.value;
    }

    return query;
  };
  async function getAllBooks(opts = {}, callback = null) {
    isLoading.value = true;
    const { error, data, status } = await useFetch<Book[]>(`${apiBase}/books`, {
      query: getQueryParams(),
      ...opts,
    });
    isLoading.value = false;
    if (data && !error.value) {
      books.value = data.value;
    }
  }

  async function getCurrentBook(bookId: String) {
     isLoadingUpdate.value = false;
    const { data, error, status } = await useAsyncData<Book>(
      `book${bookId}`,
      () => $fetch(`${apiBase}/books/${bookId}`)
    );

    isLoadingUpdate.value = false;
    if (data && !error.value) {
      currentBook.value = data.value;
    }
  }

  async function deleteBook(bookId: String) {
    isLoading.value = true;
    const { data, error, status } = await useFetch(
      `${apiBase}/books/${bookId}`,

      {
        method: "DELETE",
      }
    );

    isLoading.value = false;
    getAllBooks({ server: false, lazy: true }).then();
  }

  async function updateBook(book: Book, id: String) {
    isLoadingUpdate.value = true;
    const { data, error, status } = await useFetch<Book>(
      `${apiBase}/books/${id}`,

      {
        method: "PUT",
        body: book,
      }
    );
    isLoadingUpdate.value = false;
  }
  async function addBook(book: Book) {
    isLoadingUpdate.value = false;
    const { data, error, status } = await useFetch(
      `${apiBase}/books`,

      {
        method: "POST",
        body: book,
      }
    );
    isLoadingUpdate.value = false;
  }

  const setPage = (pageNum: Number) => {
    page.value = pageNum;
    getAllBooks({ server: false, lazy: true }).then();
  };

  return {
    getAllBooks,
    getCurrentBook,
    books,
    currentBook,
    isLoading,
    isLoadingUpdate,
    deleteBook,
    addBook,
    updateBook,
    setPage,
    page,
    limit,
    searchQuery,
  };
});

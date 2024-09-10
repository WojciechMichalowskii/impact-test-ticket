This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

1. Testy jednostkowe:
   Używanie narzędzi takich jak Jest i React Testing Library do pisania testów jednostkowych dla komponentów.
   Dodanie data-testid w elementach dla lepszej identyfikacji w testach, np. data-testid="product-item".
2. Testy integracyjne:
   Pisanie testów, które sprawdzają interakcje między komponentami, np. dodanie produktu do koszyka i aktualizacja ilości.
3. Testy E2E (end-to-end):
   Wprowadzenie Cypress do testów E2E, które symulują rzeczywiste scenariusze użytkownika, np. nawigacja między stronami, dodawanie i usuwanie produktów z koszyka.
4. Bezpieczeństwo danych użytkownika:
   Zabezpieczenie danych użytkownika w lokalnym magazynie (np. przy użyciu localStorage lub sessionStorage), szyfrując je przed zapisaniem.
   Używanie HTTPS do zabezpieczenia transmisji danych między klientem a serwerem.
5. Obsługa błędów:
   Dodanie obsługi błędów w zapytaniach do API, aby użytkownik widział komunikaty o błędach (np. brak połączenia z API).
   Stworzenie komponentów ErrorBoundary do wychwytywania i obsługi błędów React w czasie renderowania.
6. Walidacja danych:
   Walidowanie danych z API przed ich wyświetleniem, aby upewnić się, że struktura danych jest zgodna z oczekiwaniami (np. przy użyciu biblioteki Zod).
7. Ulepszenie SEO:
   Dodanie meta tagów i nagłówków SEO w każdej stronie za pomocą komponentu next/head w Next.js.
   Ulepszenie struktur danych w HTML, a także oznaczanie produktów za pomocą schema.org.
8. Optymalizacja obrazów:
   Używanie komponentu Image z Next.js do automatycznej optymalizacji obrazów i ładowania ich na żądanie (lazy loading).
   Korzystanie z formatów obrazów nowej generacji, takich jak WebP, które zmniejszają rozmiary plików.
9. SSR (Server-Side Rendering):
   Optymalizacja aplikacji pod kątem SSR, aby ładować dane przed renderowaniem strony, co poprawia wydajność i doświadczenie użytkownika.
   Korzystanie z getServerSideProps lub getStaticProps w Next.js do serwerowego generowania stron z danymi.
10. Lazy loading:
    Wprowadzenie techniki lazy loading dla elementów spoza widoku użytkownika, np. list produktów czy obrazków.
11. Cache API:
    Używanie strategii cachowania zapytań do API (np. z biblioteką SWR lub React Query), aby zmniejszyć liczbę żądań HTTP i poprawić wydajność.
    Ustawienie odpowiednich nagłówków Cache-Control na serwerze API, aby umożliwić długotrwałe przechowywanie danych.
12. Internacjonalizacja (i18n):
    Dodanie wsparcia dla wielu języków za pomocą systemu internacjonalizacji w Next.js.
13. Ulepszona obsługa stanów załadowania:
    Dodanie komponentów szkieletowych (skeleton loading) podczas pobierania danych z API, co poprawia doświadczenie użytkownika.
14. Paginate & Infinite Scroll:
    Dodanie paginacji lub nieskończonego przewijania do stron z listami produktów, aby poprawić wydajność przy dużych ilościach danych.
15. CI/CD:
    Wprowadzenie Continuous Integration/Continuous Deployment (CI/CD) z użyciem narzędzi takich jak GitHub Actions lub CircleCI, aby automatyzować testy i wdrażanie aplikacji.
16. Zarządzanie sesją użytkownika:
    Implementacja zarządzania sesją użytkownika z biblioteką takich jak next-auth, aby zapewnić bezpieczne logowanie i autoryzację.
17. Pre-fetching danych:
    Dodanie pre-fetching danych dla stron kategorii produktów, aby przyspieszyć nawigację użytkowników.
18. Obfuscation (zaciemnienie) kodu:
    Zaciemnianie kodu JavaScript w produkcyjnej wersji aplikacji, aby utrudnić jego analizę przez osoby trzecie.
19. Ulepszona nawigacja:
    Dodanie breadcrumbs (nawigacja ścieżkowa) na stronie produktu, co poprawi UX.

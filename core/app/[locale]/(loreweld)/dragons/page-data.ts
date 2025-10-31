import { cache } from 'react';

import { client } from '~/client';
import { graphql } from '~/client/graphql';
import { revalidate } from '~/client/revalidate-target';
import { ProductCardFragment } from '~/components/product-card/fragment';
import { getPreferredCurrencyCode } from '~/lib/currency';

const DragonPageQuery = graphql(
  `
    query Search($searchTerm: String, $currencyCode: currencyCode) {
      site {
        search {
          searchProducts(filters: { searchTerm: $searchTerm }) {
            products {
              collectionInfo {
                totalItems
              }
              edges {
                node {
                  ...ProductCardFragment
                }
              }
            }
          }
        }
      }
    }
  `,
  [ProductCardFragment],
);

export const getDragonPageData = cache(async (
  customerAccessToken?: string
) => {
  const currencyCode = await getPreferredCurrencyCode();
  const response = await client.fetch({
    document: DragonPageQuery,
    variables: { searchTerm: 'dragon', currencyCode },
    customerAccessToken,
    fetchOptions: customerAccessToken ? { cache: 'no-store' } : { next: { revalidate } },
  });

  return response.data.site.search.searchProducts;
});

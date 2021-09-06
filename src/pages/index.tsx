import * as React from 'react';
import stringifyObject from 'stringify-object';

import { unescapeHtml } from '@/lib/helper';

import Seo from '@/components/Seo';
import CustomLink from '@/components/links/CustomLink';

export default function HomePage() {
  //#region  //*====== Testing in console.log
  const before = {
    string: 'hi',
    oddString: '&lt;yes',
    bool: true,
    arrOfString: ['one', '&lt;wow'],
    nested: { key1: '&amp;', key2: true, nested2: ['&lt;&gt;'] },
    arrOfObj: [
      { key1: '&amp;', key2: true, nested2: ['&lt;&gt;'] },
      { key1: '&amp;', key2: true, nested2: ['&lt;&gt;'] },
    ],
    misc: 'aaaaaa&apos;&amp;aaaaaaaa',
  };
  const after = unescapeHtml(before);
  // eslint-disable-next-line no-console
  console.log('🚀 ~ file: index.tsx ~ line 18 ~ HomePage ~ before', before);
  // eslint-disable-next-line no-console
  console.log('🚀 ~ file: index.tsx ~ line 12 ~ HomePage ~ after', after);
  //#endregion //*====== Testing in console.log

  const [beforeText, setBeforeText] = React.useState(() =>
    stringifyObject(before, {
      indent: '  ',
      singleQuotes: true,
    })
  );
  const afterText = unescapeHtml(beforeText);

  function handleBeforeChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setBeforeText(e.target.value);
  }

  return (
    <>
      <Seo templateTitle='Home' />

      <main>
        <section className='bg-dark'>
          <div className='layout py-20 text-white'>
            <h1>Test Deep Copy {'&'} Unescape HTML</h1>
            <CustomLink
              className='text-gray-400 mt-2'
              href='https://github.com/theodorusclarence/learn-deepcopy-unescape'
            >
              Repository
            </CustomLink>

            <div className='space-y-4 mt-8'>
              <div className='flex flex-col gap-2'>
                <label htmlFor='before'>Before</label>
                <textarea
                  className='font-mono bg-dark'
                  name='before'
                  id='before'
                  value={beforeText}
                  onChange={handleBeforeChange}
                  cols={10}
                  rows={20}
                ></textarea>
              </div>
              <div className='flex flex-col gap-2'>
                <p>After</p>
                <pre>{afterText}</pre>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

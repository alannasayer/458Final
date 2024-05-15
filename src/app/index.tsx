import Head from 'next/head';

function Component() {
  useMetadata({
    title: 'My Page Title',
    description: 'My page description',
    // You can add other metadata elements as needed:
    keywords: 'example, sample, nextjs',
    viewport: 'width=device-width, initial-scale=1',
    charset: 'UTF-8'
  });

  return (
    <div>
      <h1>Welcome to My Page</h1>
      <p>This is a simple example of using the new Metadata API in Next.js.</p>
      {/* Your component's other content would go here */}
    </div>
  );
}

export default Component;

import Layout from "layout";

function withLayout(PageContent) {
  return function Page(props) {
    return (
      <Layout>
        <PageContent {...props} />
      </Layout>
    );
  };
}

export default withLayout;

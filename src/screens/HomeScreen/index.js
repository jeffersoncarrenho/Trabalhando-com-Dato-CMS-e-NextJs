import { pageHOC } from "../../components/wrappers/pageHOC";
import { cmsService } from "../../infra/cms/cmsService";
import { CMSSectionRender } from "../../infra/cms/CMSSectionRender";

export async function getStaticProps({ preview }) {
  const { data: cmsContent } = await cmsService({
    query: `query{
              pageHome{
                pageContent{
                  section{
                  ComponentName: __typename
                    ... on CommonSeoBlockRecord{
                      id
                      title
                    }
                    ... on CommonMenuRecord{
                      id
                    }
                    ... on CommonFooterRecord{
                      id
                    }
                    ... on PagehomeHerosectionRecord{
                      id
                      title
                      description
                      ctalink
                      ctatext
                    }
                  }
                }
              }
            }`,
    preview,
  });

  return {
    props: {
      cmsContent,
    },
  };
}

function HomeScreen() {
  return <CMSSectionRender pageName="pageHome" />;
}

// function HomeScreen() {
//   return (
//     <>

//       <Footer />
//     </>
//   );
// }

export default pageHOC(HomeScreen);

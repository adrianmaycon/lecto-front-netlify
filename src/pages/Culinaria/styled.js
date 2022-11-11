import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const ContainerBody = styled.main`
  width: 100%;
  display: flex;
  margin-top: 60px;
  flex-direction: column;
  align-items: center;
  padding-bottom: 80px;

  .h2-title {
    font-family: Roboto, sans-serif;
    font-weight: 600;
    margin-top: 40px;
    margin-bottom: 20px;
  }

  .page-cont {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1000px;
    min-height: 600px;
    border: 1px solid #666666;
    border-radius: 3px;

    .box-anun {
        width: 100%;
        background: #eee;
        display: flex;
        padding: 20px 0;
        flex-direction: column;
        align-items: center;
    }

    .anun-all {
        width: 90%;
        max-width: 735px;
        cursor: pointer;
    }

    .adsMedium,
    .adsLarge {
        width: 100%;
        height: 200px;
        object-fit: cover;
        cursor: pointer;
    }

    .adsMedium {
        height: 500px;
    }

    .container-infos {
        width: 100%;
        display: grid; 
        grid-template-columns: calc(100% - 330px) 300px;
        gap: 30px;
    }

    .container-links-category {
        width: 100%;
        height: fit-content;
        display: grid;
        grid-template-columns: 2fr 2fr 2fr;
        gap: 20px;

        a {
            text-decoration: none;
            color: #000;
        }
    }

    .main-info {
        width: 100%;
        padding: 20px;

        .description-title {
            font-family: Roboto, sans-serif;
            font-size: 18px;
            color: #808080;
        }

        .entry-crumbs {
            width: 100%;
            display: flex;

            a {
                text-decoration: none;
            }

            slug {
                font-family: Roboto, sans-serif;
                font-weight: 500;
                font-size: 18px;
                color: #808080;
                cursor: pointer;
            }
        }
    }
  }

  @media (max-width: 1000px) {
    .page-cont {
        .container-links-category {
            grid-template-columns: 2fr 2fr;
        }
    }
  }

  @media (max-width: 800px) {
    .page-cont {
        .container-links-category {
            grid-template-columns: 4fr;
        }
    }
  }
`;

export const Title = styled.h1`
    margin-top: 20px;
    margin-bottom: 10px;
    font-family: Roboto, sans-serif;
    color: #000000;
`;

export const Card = styled.div`
    width: 100%;
    cursor: pointer;
    padding: 5px;
    border-radius: 4px;
    margin-bottom: 30px;

    .image-banner {
        width: 100%;
        height: 150px;
        border-radius: 4px;
        object-fit: cover;
    }

    .subtitle-card {
        margin-top: 10px;
        font-family: 'Verdana';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 18px;
    }
    
    :hover {
        background-color: #b8f5ff;
    }
`;

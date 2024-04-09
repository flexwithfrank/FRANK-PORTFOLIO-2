/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
'use-client'
import LargeText from "@/components/LargeText";
import Badge from "@/components/ui/Badge";
import Hero from "@/components/Hero";
import OpenText from "@/components/OpenText";

export default function Product() {
  return (
    <div className="animate-scroll mt-5 min-h-screen w-full text-left">
      <LargeText
        h1="Product Details"
        h2="Product Details"
        color="#5e5e7b"
      />

      {/*<!-- Component: Two columns even layout --> */}
      <section className="w-full px-8 pt-24 lg:px-0 ">
        <div className="lg-6 container lg:px-12">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 lg:col-span-6">
              {/*<!-- Component: Rounded full basic base sized badge --> */}

              <Badge
                value1="HTML"
                value2="CSS"
                value3="AMPScript"
                value4="JavaScript"
                value5="Bootstrap"
                value6="Personalization"
                titleText="Tech Stack"
                color='#5e5e7b'
              />

              {/*<!-- End Rounded full basic base sized badge --> */}
            </div>
            <div className="inter-medium col-span-4 lg:col-span-6">
              Designed with HTML, CSS, Bootstrap, and Javascript this
               platform redefines the customer experience by
              presenting a detailed product information page. Users
              can effortlessly navigate through the interface, gaining
              a comprehensive understanding of the ideal product.
              This page ensures a personalized and engaging
              journey for every user. <br/> <br/>
              View the full web experience <a href='https://cloud.marketing.fiskerinc.com/search-vehicle-description?qs=7285d1e28ee8a23a281732ddb842970f6a5950a5aa94f197d263d04ec017b9ab4e1fb7bfe21112466be0c76c5162fe03c0af04e08d1a5c805d2ae4a2ffd573c0a5e23baae727d735f707228af0ef784acbe9a3ed1ea119b0e20df59e6d827f5d0a7e2d3d73691ef965e54b511656172813a40b9b17a9a847976f72f8522aaac56c9a1a1f700e0fb09052a2bfe874a7868381f74f661e7ba40c05246c232f80fb084c94fe528e34f49752ea6951cdcbd7d7f496ecb20f12c35b9d43baf9ec443001a086e6c5b1ceffcd72bbe79b86085299994317e6470155bd6c4c719c02fefa1ce965585cf36f3179a2cc9cc468d3f1b078f790a965249ce1da0ca064492d2457ffe2f669204ac91b6015819d81670841c9082d0088bad95f089e2278504267ac6b2b2cada3a1e3419088904348b40491d71f2d5cbb07ba72e3d125336dd15dbbb7da4fdaeef09908c53a1f32a10055bb88444b98365c4ee55f24289ede7043160e46db6b270a0168b2450e5bec5d2c1af1d66f6d69f5b795fbaeb74eeb0d069f40cc6c262e01c429fcb4b159972a2c538982a07166f28f4f3b1e7502373ba4b09dd6c70665d86033e0659ec3df23701803849c4052eec94e5a47183e7639c920757b44fc78a20c2cc4146d7c64b6de61adbc85f1445a3ad81a041fbeb1a127715ae0df34047914540662f07ccbfe99dd77cf9056f8d425c629fe9978f770e621bda9f8c3423dd50d654c2bb737910c20eea8cf93d36bbfa0625091fa593354d71eed8337f821965c86fda6b74c9fc83147f57baef5fc41746d0a8af86907ff96c0b480c555fe232cc031c7cb089ddc940357bc23a1887269d5390bc9455e4b5d577bf6323a88a3fbb6ad8a75fd1c6842cb442039338005a9d4cd1f2625b26f05863b5fb1e61f513981019f91782176a7685c6c0f5064bd303fcfd88e70b3aa7eb9009879c9531c73f14232bae39e655581ae5365fed7078a9e7f9384cadde9b23b67a9baf7ece9a0364947621aa6147b61c6429578b9c1ac2829df2af806f69c93cf203a3f6b7ccca4eb5cfcde275b1d0e1522d473d63eeda64c8a8c251b6e6cf6aac07f355bad52ae5d62ef056a06ba198608d2e9921a3d962c4e59ab93ac428ed070d148e7015f8efa4fbcdf682f6dc0448384ab6572c1895f665991ad760ac7309aac0f8800dfcbcfe2e790a757eca663e5459822f0bb333aab24312cb7f57083b169a9a7e3f81d65877ab56ac7e5b420feaf3a8833d144dae9ec112bea95f77cefd4e34a6019a2c2ee67cb7c0a2fa58302d09afc3df0d1e4954bb052be4c130e2f4f9aa9fbbd0fc60bae64300cc74ee643ee4a2f83fa33a6b5e5eb31d9809d38c69d1691211c837f4b5ec70fac1d8a2a2a4f647fff2f207649ed3992f9a40a769abb62d101d3d2ebc44eedd2565818a80339b501589455d50ff5e133c7f3d283fdb1cf730c69d21156ad473ae9ea69b185c358061c065de4a7eec61ee966dd7d3b0a165f891bbdf38a266c58a4f545ef2fce0997a9374ab6c5984b974b406324a30c97267962a00099c2f583b9d377b0196f01098d2d47399cbda2b9c98b9eb597a99b503bebb2efa16e9ab02b5ab79e6f61021e6827cc79e72803b8f4a446abba7eb8a328d2219c0a0360426e669c66db97e5479732e3a99a2677337769839abb3e079f2ce67efb54494c55bf73169a843ff6259508a5cc3fc305bedb4257c7e733be3fda766f34470414178c3845d1c9ea2885ac9f32e462f356813097a856f7a46d6994deed2df25e0e6470cf5fc56745057fe192861e5ea1ceb15b2688b08ee9117469f7dff0eca705e535ac2ffe5932ca863eb1c84971ebdfa68ba4e65ad9ec620bb577f4857a6925f7ece4b65ba74af94a940180dd7075c38190600dcf7d8193dfe909429a226c72042d199e2d9ca9d06df04f238ea6accc5d610facca823d4dda3b3244e4db3828a662b61a889f38e6e0e736eb3f13331aae9e14c2922cc22e2adaca2b2c71f209e8908eb5477030d76859ffecf7c8d1cea90a8fc4c55e4a5cde13ad5a464c132eb30ec8c671eb0955b66c81725b97361c42b4379ef820217a277f16536231828ae95acd1b6ba5d0864041f925bb27167f0ccdb9d4417e08a53cae2ddbddaf3703533ebf7db00f00604017db570f6604fdb7b9282db69e554c2e346dcb630bd10fbd39d0b62f7cda2494635b0376d1b8f42c608c326412a423076c6768d2b068f9a6f083175eb3d9498889dabff70ccb5a11c35263806de80a5ff4386560dc8ac87f6dbd4a9d823349124a798e6e0ab75e3142d15c34a35b18ade62d49e308a23acb024bbea03dd2e7016625370b65a289c643ec6f939ce81cca06'className="underline font-bold" target="_blank">here</a>.
            </div>
           
          </div>
        </div>
      </section>
      {/*<!-- End Two columns even layout --> */}

      <div className="w-full py-12">
        <Hero url="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/thk/5uo/eub/Untitled%20design%20%283%29.gif" />
      </div>

      {/*<!-- Component: Two columns even layout --> */}
      <section className="w-full px-8 lg:px-0 ">
        <div className="lg-6 container">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 lg:col-span-6">
              {/*<!-- Component: Rounded full basic base sized badge --> */}

              <OpenText
                h1=""
                p1="Preview the page"
                color="#ff3c00"
              />

              {/*<!-- End Rounded full basic base sized badge --> */}
            </div>
            <div className="inter-medium col-span-4 lg:col-span-6">
              <img
                class="mx-auto rounded-lg object-cover object-center shadow-2xl"
                alt="hero"
                src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/xzj/yu5/2xe/screencapture-cloud-marketing-fiskerinc-search-vehicle-description-2024-04-08-14_22_58%201%20%281%29.png"
              />
            </div>
          </div>
        </div>
      </section>
      {/*<!-- End Two columns even layout --> */}
    </div>
  );
}
